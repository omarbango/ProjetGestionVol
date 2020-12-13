import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
form: FormGroup;
errorMsg: string;

  constructor(private fb: FormBuilder, public userservice: LoginService,
    private router: Router)
     {
      this.form = this.fb.group({
        id: ['', Validators.required],
        username : ['', Validators.required],
        password:  ['', [Validators.required, Validators.minLength(6)]],
        email: ['', Validators.required],
        role: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }

}
