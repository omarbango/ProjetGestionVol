import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AccueilComponent } from './accueil/accueil.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';


import { LoginComponent } from './login/login.component';
import { ModifieruserComponent } from './modifieruser/modifieruser.component';
import { ModifiervolComponent } from './modifiervol/modifiervol.component';
import { ReservationComponent } from './reservation/reservation.component';





const routes: Routes = [
  {
    path:'accueil',
    component: AccueilComponent
    },
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adduser/user',
   component: AdduserComponent 
  },
  
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: 'addvol',
   component: AddVolComponent
  },
  {
    path: 'Modifier/:id', component: ModifiervolComponent
  },
  {
    path: 'listUser/user',
   component: ListUserComponent
  },
  {
    path: 'Modifieruser/:id',
   component: ModifieruserComponent
  },
  {
    path: 'reservation',
   component: ReservationComponent
  },
  {
    path: 'listUser/user/:id',
   component: ListUserComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
