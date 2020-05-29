import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {NonAuthenticatedGuard} from './core/guards/non-authenticated.guard';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [NonAuthenticatedGuard]
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
