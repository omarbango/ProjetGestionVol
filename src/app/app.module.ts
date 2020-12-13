import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AdduserComponent } from './adduser/adduser.component';

import { ListUserComponent } from './list-user/list-user.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { HomeComponent } from './home/home.component';
import { ModifiervolComponent } from './modifiervol/modifiervol.component';
import { PromoComponent } from './promo/promo.component';
import { ModifieruserComponent } from './modifieruser/modifieruser.component';
import { ReservationComponent } from './reservation/reservation.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    AdduserComponent,
    ListUserComponent,
    AddVolComponent,
    HomeComponent,
    ModifiervolComponent,
    PromoComponent,
    ModifieruserComponent,
    ReservationComponent,
    

    
  
  
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
