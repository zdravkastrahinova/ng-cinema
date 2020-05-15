import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../../movie.interface';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-movie-reactive-form',
  templateUrl: './movie-reactive-form.component.html',
  styleUrls: ['./movie-reactive-form.component.scss']
})
export class MovieReactiveFormComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  movie: Movie;

  destroy$ = new Subject<boolean>();

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      if (params.id) {
        this.moviesService.getMovieById(params.id).pipe(
          takeUntil(this.destroy$)
        ).subscribe(response => {
          this.movie = response;

          this.buildForm();
        });
      }
    });

    this.buildForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void {
    const movie = this.formGroup.value;

    this.moviesService.saveMovie(movie).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() =>
      this.router.navigate(['/movies-card-list']));
  }

  private buildForm(): void {
    if (!this.movie) {
      this.movie = {
        title: '',
        director: '',
        rating: 0
      };
    }

    this.formGroup = this.fb.group({
      id: [this.movie.id],
      title: [this.movie.title, [Validators.required, Validators.minLength(5)]],
      description: [this.movie.description],
      director: [this.movie.director],
      rating: [this.movie.rating],
      imageUrl: [this.movie.imageUrl]
    });
  }
}
