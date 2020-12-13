import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-modifiervol',
  templateUrl: './modifiervol.component.html',
  styleUrls: ['./modifiervol.component.scss']
})
export class ModifiervolComponent implements OnInit {
  
volObj={
  id :0,
  destination:"",
  depart:"",
  datedepart:"",
  prix:0
      }
  idObj;
  constructor(public mv: AcceuilService, private f: FormBuilder, private activatedRoute: ActivatedRoute, private router:Router) { }

  form = this.f.group({
    id: ['', Validators.required],
    destination: ['', Validators.required],
    depart: ['', [Validators.required]],
    datedepart: ['', [Validators.required]],
    prix: ['', [Validators.required]]

  });
  get id() {
    return this.form.get('id');
  }

  ngOnInit(): void {
    
    this.idObj = this.activatedRoute.snapshot.params['id'];
    this.mv.getVolById(this.idObj).subscribe(res=>{
      console.log(res)
      this.volObj=res;

    })


  }

  public modifier(id, form) {
   // this.test = false;
    this.mv.modifierVol(id, form).subscribe(
      (data) => {
        console.log(form)
  
        console.log('modefication effectuée');
        //console.log(this.ListVol);
        this.router.navigate(['home']);
        alert("modification avec succés")
      }
    );
  }

}
