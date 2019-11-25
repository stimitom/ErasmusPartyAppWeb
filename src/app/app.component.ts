import { Component, OnInit } from '@angular/core';
import { Venue } from './shared/venue.model';
import { VenueService } from './shared/venue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ErasmusPartyAppWeb';
  venueSelected:Venue; 

  constructor(private venueService:VenueService){}
  
  ngOnInit(){ 
     this.venueService.venueSelected
     .subscribe(
       (venue:Venue) => { 
         this.venueSelected = venue; 
       }
     )
  }

}
