import { Component, OnInit } from '@angular/core';
import { AcceuilService } from '../shared/acceuil.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(private acceuilService : AcceuilService) { }

   allReservation=[];
   detailReservations =[];
  ngOnInit(): void {
    this.acceuilService.getAllReservations().subscribe(
      data => { 
        this.allReservation=data;
        this.allReservation.forEach(re=>{
          this.acceuilService.getVolById(re.idVol).subscribe(vol=>{
            this.acceuilService.getUserById(re.idUser).subscribe(user=>{
              this.detailReservations.push({"vol":vol,"user":user})
            })
          console.log(this.detailReservations)  
          });
        })
      }
    )

  }

}
