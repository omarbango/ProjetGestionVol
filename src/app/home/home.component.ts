import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/users';
import { Vol } from '../model/vols';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listVols : Vol[] =[];
  depart="";
  destination="";
  showReservation=false;
  volToShow: any;
  loggedUser:User;
  promotion;

  constructor(private acceuilService :AcceuilService, private router : Router) { }

  ngOnInit(): void {

     this.loggedUser=JSON.parse(localStorage.getItem("loggedUser"));
     console.log(this.loggedUser)
    this.acceuilService.getAllVol()
    .subscribe(
      (data) => {
        console.log(data);
        this.listVols = data;
        console.log(this.listVols);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
     
    )
  ;
  }

  public goToModifier(id) {
    this.router.navigate(['Modifier/' + id]);
  }
  
  chercher(depart,destination){
    //this.loadVols();
    this.acceuilService.getAllVol()
    .subscribe(
      (data) => {
        this.listVols = data;
        console.log(this.listVols);
        this.listVols=this.listVols.filter(vol=>{ // filtre dans subscribe sinon il fonctionnent en // et on aura un mauvais resultat
          if(depart!="" && destination!=""){
            return (vol.destination.includes(destination) && vol.depart.includes(depart))
          }
          if(depart!="" && destination==""){
            return (vol.depart.includes(depart))
          }
          if(depart=="" && destination!=""){
            return (vol.destination.includes(destination))
          }
          
        });
        console.log(this.listVols)
        if(depart=="" && destination==""){
          this.loadVols();
        }
      });
      
    
    console.log(this.listVols)
  }

  loadVols(){
    this.acceuilService.getAllVol()
    .subscribe(
      (data) => {
        this.listVols = data;
        console.log(this.listVols);
      });
  }

  showPromo(vol){
    this.volToShow=vol;
    this.showReservation=!this.showReservation;
  }

  onPromo(event){
    // event[0] ==> id vol
    // event[1] ==> new prix
    this.promotion=event;
  }

reserver(idUser,idVol){
  console.log(idUser,idVol);
  this.acceuilService.addReservation(idUser,idVol).subscribe()
  alert ("reservation avec succes")
}
 
}
