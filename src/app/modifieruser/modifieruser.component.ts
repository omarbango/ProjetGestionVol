import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.scss']
})
export class ModifieruserComponent implements OnInit {

  constructor(public mu: AcceuilService, private fu: FormBuilder, private activatedRoute: ActivatedRoute, private router:Router) { }

  userObj={
    id :0,
    username:"",
    password:"",
    email:"",
    role:""
        }
  idObj ; 
  form = this.fu.group({
    id: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required]],
    email: ['', [Validators.required]],
    role: ['', [Validators.required]]

  });
  get id() {
    return this.form.get('id');
  }
  ngOnInit(): void {
    this.idObj = this.activatedRoute.snapshot.params['id'];
    this.mu.getUserById(this.idObj).subscribe(res=>{
      console.log(res)
      this.userObj=res;

    })

  }
  public modifierUser(id, form) {
    
     this.mu.modifierUser(id, form).subscribe(
       (data) => {
         console.log(form)
   
         console.log('modefication effectuée');
         
         this.router.navigate(['listUser/user']);
         alert("modification avec succés")
       }
     );
   }

}
