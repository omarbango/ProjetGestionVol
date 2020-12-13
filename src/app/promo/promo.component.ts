import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  @Input() volInput;
  @Output() promo = new EventEmitter<any>();
  promoValue:number;
  prixPromo:number;
  newPrix;
  constructor() { }

  ngOnInit(): void {
    
  }

  selectPromo(){
    this.prixPromo=this.volInput.prix-(this.volInput.prix/100 *this.promoValue);
    console.log(this.prixPromo);
    this.promo.emit([this.volInput.id,this.prixPromo]);
  }

}
