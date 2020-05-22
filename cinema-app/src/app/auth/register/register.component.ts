import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {User} from '../models/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  destroy$ = new Subject<boolean>();

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    // check for password mismatch
    const formData = this.form.value;
    if (formData.password !== formData.rePassword) {
      this.errorMessage = 'Passwords do not match.';

      // this.form.get('password').setValue('');
      // this.form.get('rePassword').setValue('');

      this.form.reset({
        name: formData.name,
        email: formData.email,
        password: '',
        rePassword: ''
      });

      return;
    }

    // getAllUsers -> check if email exists
    this.authService.getUsers().pipe(
      map((response: User[]) => response.find(user => user.email === formData.email)),
      takeUntil(this.destroy$)
    ).subscribe(userResponse => {
      if (userResponse) {
        this.errorMessage = 'Email has already been taken. Try with another one.';

        return;
      }

      this.authService.register(this.form.value).pipe(
        takeUntil(this.destroy$)
      ).subscribe(response => {
        this.router.navigate(['login']);
      });
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
}
