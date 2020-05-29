import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesTableComponent} from './movies-table/movies-table.component';
import {MoviesCardsListComponent} from './movies-cards-list/movies-cards-list.component';
import {MovieCardItemComponent} from './movie-card-item/movie-card-item.component';
import {MovieTdFormComponent} from './movie-forms/movie-td-form/movie-td-form.component';
import {MovieReactiveFormComponent} from './movie-forms/movie-reactive-form/movie-reactive-form.component';
import {MoviesComponent} from './movies.component';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {FormatPipe} from './pipes/format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MoviesRoutingModule
  ],
  declarations: [
    FormatPipe,
    MoviesComponent,
    MoviesTableComponent,
    MoviesCardsListComponent,
    MovieCardItemComponent,
    MovieTdFormComponent,
    MovieReactiveFormComponent
  ]
})
export class MoviesModule {
}
