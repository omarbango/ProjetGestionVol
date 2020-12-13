import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { Vol } from '../model/vols';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  loggedUser:User;
  constructor() { }

  ngOnInit(): void{
    this.loggedUser=JSON.parse(localStorage.getItem("loggedUser"));
  }

}
