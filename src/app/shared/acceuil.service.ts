import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../model/reservation';
import { User } from '../model/users';
import { Vol } from '../model/vols';


@Injectable({
  providedIn: 'root'
})
export class AcceuilService {

  ListVol : Vol [] = [];
  listUser : User[] =[];
  test = false;
  constructor(private http:HttpClient , private router : Router) { }

  private urlVol='http://localhost:3000/vol/';
  private urlUser='http://localhost:3000/users/';
  private urlReservation='http://localhost:3000/reservation/';

  getAllUser(){
    return this.http.get<User[]>(this.urlUser);
    //******************************* */
  }
  getUserById(id){
    return this.http.get<User>(this.urlUser+id);
    //******************************* */
  }

  getVolById(id){
    return this.http.get<Vol>(this.urlVol+id);
    //******************************* */
  }

  getAllVol(){
    return this.http.get<Vol[]>(this.urlVol);
    //********************************** */
  }//ajouter vol
  ajouterVol(vol: Vol) {
    console.log("efore post");
    console.log(vol);
    return this.http.post<Vol>(this.urlVol, vol);
  }
  
  public ajouter(form) {
    this.test = false;
    this.ajouterVol(form).subscribe(
      (data) => {
        console.log('ajouuuut');
        console.log(data);
        this.router.navigate(['/home']);
      }
    );
  }
  //************************************** */
  //supp user
  deleteUser(id: number) {
    return this.http.delete(this.urlUser + id);
  }
  
  //****************************************** */
//modifier vol

modifierVol(id: number, prod: Vol) {
  return this.http.put<Vol>(this.urlVol + id, prod);
}
//modifier user
modifierUser(id: number, user: User) {
  return this.http.put<User>(this.urlUser + id, user);
}

addReservation(idUser,idVol){
  var idReservation=Math.floor(Math.random() * 500) + 1;
  var reservation= new Reservation();
  reservation.id=idReservation;
  reservation.idUser=idUser;
  reservation.idVol=idVol;
  return this.http.post<Reservation>(this.urlReservation,reservation);
}
getAllReservations(){
  return this.http.get<Reservation[]>(this.urlReservation);
}



}