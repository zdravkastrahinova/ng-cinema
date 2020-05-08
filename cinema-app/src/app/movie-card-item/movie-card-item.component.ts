import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Movie} from '../movie.interface';

@Component({
  selector: 'app-movie-card-item',
  templateUrl: './movie-card-item.component.html',
  styleUrls: ['./movie-card-item.component.scss']
})
export class MovieCardItemComponent {

  @Input() movie: Movie;

  @Output() movieSelected = new EventEmitter<string>();

  constructor() {
    this.movie = {
      title: '',
      director: '',
      rating: 0
    };
  }

  getDescription(): string {
    if (this.movie.description.length > 100) {
      return `${this.movie.description.substr(0, 100)}...`;
    }

    return this.movie.description;
  }

  onSelectClick(): void {
    this.movieSelected.emit(this.movie.title);
  }
}
