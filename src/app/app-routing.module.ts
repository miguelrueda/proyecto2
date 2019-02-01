import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ActorsComponent } from './components/tabs/actors/actors.component';
import { MoviesComponent } from './components/tabs/movies/movies.component';
import { CategoriesComponent } from './components/tabs/categories/categories.component';

const routes: Routes = [
  {
    path: 'create', component: CreateComponent,
    children: [
      { path: 'actor', component: ActorsComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'category', component: CategoriesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'actor' }
    ]
  },
  {
    path: 'read', component: ReadComponent,
    children: [
      { path: 'actor', component: ActorsComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'category', component: CategoriesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'actor' }
    ]
  },
  {
    path: 'update', component: UpdateComponent,
    children: [
      { path: 'actor', component: ActorsComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'category', component: CategoriesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'actor' }
    ]
  },
  {
    path: 'delete', component: DeleteComponent,
    children: [
      { path: 'actor', component: ActorsComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'category', component: CategoriesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'actor' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'create' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
