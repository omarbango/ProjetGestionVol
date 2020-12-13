import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password : string;
  msgErreur:string;

  constructor(private router:Router, private loginService:LoginService) { }
  
  ngOnInit(): void {
  }

  login(username,pwd){
    this.loginService.getAllBase().subscribe(res=>{
      let utilisateurs = res;
      let trouve=false;
      for(var i=0; i< utilisateurs.length && !trouve;i++){
        if(utilisateurs[i].username==username && utilisateurs[i].password==pwd){
          trouve=true;
          localStorage.setItem('loggedUser',JSON.stringify(utilisateurs[i]));
          this.router.navigate(['home']);
        }
      }
      if(!trouve){  // !trouve =>  trouve==false
        this.msgErreur='non trouve'
      }
    });
  }
}
