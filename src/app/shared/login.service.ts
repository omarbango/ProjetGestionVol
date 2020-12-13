import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../model/users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient , private router : Router) { }

  private url='http://localhost:3000/users/';
  ListUsers : User [] = [];
  test = false;

  getAllBase() {
    return this.http.get<User[]>(this.url);
  }
  //*************************** */
  //ajout user
  ajouterUser(user: User) {
    console.log("efore post");
    
    return this.http.post<User>(this.url, user);
  }
  public ajouter(form) {
    this.test = false;
    this.ajouterUser(form).subscribe(
      (data) => {
        console.log('ajouuuut');
        this.router.navigate(['']);
      }
    );
  }
}
