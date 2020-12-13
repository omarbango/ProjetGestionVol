import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.scss']
})
export class AddVolComponent implements OnInit {

  form: FormGroup;
  constructor(private f: FormBuilder, public volservice: AcceuilService,
    private router: Router) 
    { 
      this.form = this.f.group({
        id: ['', Validators.required],
        destination : ['', Validators.required],
        depart : ['', Validators.required],
        datedepart: ['', Validators.required],
        prix: ['', Validators.required],
        promotion:['',Validators.required]
        
      });
    }

  ngOnInit(): void {
  }

}
