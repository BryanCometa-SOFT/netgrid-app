//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

//Components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DetailsCharacterComponent } from './chracters/details/details-character.component';
import { FavoritesCharacterComponent } from './chracters/favorites-character/favorites-character.component';
import { HomeCharacterComponent } from './chracters/home-character/home-character.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeCharacterComponent, canActivate: [AuthGuard] },
      { path: 'characters/:id', component: DetailsCharacterComponent, canActivate: [AuthGuard] },
      { path: 'favorites', component: FavoritesCharacterComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
