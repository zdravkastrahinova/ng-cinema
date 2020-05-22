import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(searchValue?: string): Observable<Movie[]> {
    if (searchValue) {
      let params = new HttpParams();
      params = params.append('title', searchValue);

      return this.http.get<Movie[]>(this.url, {
        params
      });
    }

    return this.http.get<Movie[]>(this.url);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/${id}`);
  }

  saveMovie(movie: Movie): Observable<Movie> {
    if (movie.id) {
      return this.updateMovie(movie);
    } else {
      return this.addMovie(movie);
    }
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.url}/${id}`);
  }

  private addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.url, movie);
  }

  private updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.url}/${movie.id}`, movie);
  }
}
