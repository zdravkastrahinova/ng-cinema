import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-movie-reactive-form',
  templateUrl: './movie-reactive-form.component.html',
  styleUrls: ['./movie-reactive-form.component.scss']
})
export class MovieReactiveFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      director: [''],
      rating: [0],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formGroup);
    console.log(this.formGroup.value);
  }
}
