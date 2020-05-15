import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Movie} from '../movie.interface';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-movies-cards-list',
  templateUrl: './movies-cards-list.component.html',
  styleUrls: ['./movies-cards-list.component.scss']
})
export class MoviesCardsListComponent implements OnInit, OnDestroy {

  movies: Movie[];
  selectedMovieTitle: string;

  formGroup: FormGroup;

  destroy$ = new Subject<boolean>();

  constructor(private moviesService: MoviesService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getMovies();

    this.formGroup = this.fb.group({
      search: ['']
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onMovieSelected(title: string): void {
    this.selectedMovieTitle = title;
  }

  onSearch(): void {
    // get title from form
    const searchValue = this.formGroup.controls.search.value;

    this.getMovies(searchValue);
  }

  onClearSearch(): void {
    this.formGroup.get('search').setValue(null);

    this.getMovies();
  }

  onDelete(id: number): void {
    this.moviesService.deleteMovie(id).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getMovies();
    });
  }

  private getMovies(searchValue?: string): void {
    this.moviesService.getMovies(searchValue).pipe(
      // map(response => response.filter(x => x.rating > 7)),
      takeUntil(this.destroy$)
    ).subscribe(response => {
      this.movies = response;
    }, error => {
      console.log(error);
    });
  }
}
