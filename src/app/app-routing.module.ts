import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  {path:'album/:id',component:AlbumDescriptionComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
