import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Movie} from '../../movie.interface';

@Component({
  selector: 'app-movie-td-form',
  templateUrl: './movie-td-form.component.html',
  styleUrls: ['./movie-td-form.component.scss']
})
export class MovieTdFormComponent implements OnInit {

  @ViewChild('form') ngForm: NgForm;

  movie: Movie;

  constructor() {
    this.movie = {
      title: '',
      director: '',
      rating: 0
    };
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.ngForm);
    console.log(this.ngForm.form.value);
  }

}
