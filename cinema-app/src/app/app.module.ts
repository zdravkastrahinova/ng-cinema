import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MoviesTableComponent} from './movies-table/movies-table.component';
import {MoviesCardsListComponent} from './movies-cards-list/movies-cards-list.component';
import { MovieCardItemComponent } from './movie-card-item/movie-card-item.component';
import { MovieTdFormComponent } from './movie-forms/movie-td-form/movie-td-form.component';
import { MovieReactiveFormComponent } from './movie-forms/movie-reactive-form/movie-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesTableComponent,
    MoviesCardsListComponent,
    MovieCardItemComponent,
    MovieTdFormComponent,
    MovieReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
