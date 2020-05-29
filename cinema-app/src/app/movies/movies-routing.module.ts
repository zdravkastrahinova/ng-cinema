import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {MoviesTableComponent} from './movies-table/movies-table.component';
import {MoviesCardsListComponent} from './movies-cards-list/movies-cards-list.component';
import {MovieReactiveFormComponent} from './movie-forms/movie-reactive-form/movie-reactive-form.component';
import {MoviesComponent} from './movies.component';

const routes: Route[] = [
  {
    path: '',
    component: MoviesComponent,

    children: [
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
