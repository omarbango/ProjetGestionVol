import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/users';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  listUser : User[] =[]
  constructor(private f: FormBuilder, public listusersservice: AcceuilService,
    private router: Router) { }

  ngOnInit(): void {
    this.listusersservice.getAllUser()
    .subscribe(
      (data) => {
        console.log(data);
        this.listUser = data;
        console.log(this.listUser);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
     
    )
  ;
  }
  public supprimer(id) {
   // this.test = false;
    this.listusersservice.deleteUser(id).subscribe(
      (data) => {
        //this.router.navigate(['/']);//mayfasakhch ken b refrech
        console.log('delete success');
        this.listusersservice.getAllUser()
    .subscribe(
      (data) => {
        console.log(data);
        this.listUser = data;
        console.log('list after delet',this.listUser);
      });
      }
    );

  }
  public goToModifierUser(id) {
    this.router.navigate(['Modifieruser/' + id]);
  }
}
