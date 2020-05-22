import {Component} from '@angular/core';
import {Movie} from '../movie.interface';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent {
  showError: boolean;
  movieInput: string;
  movies: Movie[] = [
    {
      title: 'Trolls World Tour',
      description: 'When the Queen of the Hard Rock Trolls tries to take over all the Troll kingdoms, Queen Poppy and her friends try different ways to save all the Trolls.',
      director: 'Walt Dohrn',
      rating: 6.1,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI5NmViY2YtNDk5NC00NjY2LWFlNGYtOGEwNzY1MTZmMjFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Dune',
      description: 'Feature adaptation of Frank Herbert\'s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
      director: 'Denis Villeneuve',
      rating: 5.3,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTBmMmVhYmMtNmI4MC00MGIzLWJhNmEtZDAyZjFiNjU5NzYzXkEyXkFqcGdeQXVyNTQ5OTI3MzM@._V1_UY268_CR9,0,182,268_AL_.jpg'
    },
    {
      title: 'Code 8',
      description: 'A super-powered construction worker falls in with a group of criminals in order to raise the funds to help his ill mother.',
      director: 'Jeff Chan',
      rating: 6.1,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNmQ2NWMyZDgtNWQ5My00ZmQwLWE0MTQtN2ZiNjY2ODc0Y2YxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'The Gentlemen',
      description: 'An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.',
      director: 'Guy Ritchie',
      rating: 8,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'The Platform',
      description: 'A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from up to down. An endless nightmare trapped in The Hole.',
      director: 'Galder Gaztelu-Urrutia',
      rating: 7,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'The Platform #2',
      description: 'A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from up to down. An endless nightmare trapped in The Hole.',
      director: 'Galder Gaztelu-Urrutia',
      rating: 7,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  ];

  onAddClick(): void {

    if (!this.movieInput || !this.movieInput.trim()) {
      this.showError = true;

      return;
    }

    // 1. add movies
    this.movies.push({
      title: this.movieInput,
      director: 'J. Smith',
      rating: 0.3
    });

    // 2. clear input
    this.movieInput = null;
  }
}
