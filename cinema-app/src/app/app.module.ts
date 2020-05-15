import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MoviesTableComponent} from './movies-table/movies-table.component';
import {MoviesCardsListComponent} from './movies-cards-list/movies-cards-list.component';
import {MovieCardItemComponent} from './movie-card-item/movie-card-item.component';
import {MovieTdFormComponent} from './movie-forms/movie-td-form/movie-td-form.component';
import {MovieReactiveFormComponent} from './movie-forms/movie-reactive-form/movie-reactive-form.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Route[] = [
  {
    path: 'movies-table-list',
    component: MoviesTableComponent
  },
  {
    path: 'movies-card-list',
    component: MoviesCardsListComponent
  },
  {
    path: 'movie-add',
    component: MovieReactiveFormComponent
  },
  {
    path: 'movie-add/:id',
    component: MovieReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: 'movies-table-list'
  }
];

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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
