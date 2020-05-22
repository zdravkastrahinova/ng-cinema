import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './auth/guards/auth.guard';
import {NonAuthenticatedGuard} from './auth/guards/non-authenticated.guard';
import {AppComponent} from './app.component';
import {MoviesTableComponent} from './movies/movies-table/movies-table.component';
import {MovieTdFormComponent} from './movies/movie-forms/movie-td-form/movie-td-form.component';
import {MovieReactiveFormComponent} from './movies/movie-forms/movie-reactive-form/movie-reactive-form.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MoviesCardsListComponent} from './movies/movies-cards-list/movies-cards-list.component';
import {MovieCardItemComponent} from './movies/movie-card-item/movie-card-item.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'movies-table-list',
    component: MoviesTableComponent
  },
  {
    path: 'movies-card-list',
    component: MoviesCardsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-add',
    component: MovieReactiveFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-add/:id',
    component: MovieReactiveFormComponent,
    canActivate: [AuthGuard]
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
    MovieReactiveFormComponent,
    LoginComponent,
    RegisterComponent
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
