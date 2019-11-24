import { Component, OnInit, Input } from '@angular/core';
import { Venue } from 'src/app/shared/venue.model';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  @Input() venue: Venue; 
  imagePath: string; 
  constructor() { }

  ngOnInit() {
   this.setImagePath(); 
  }

  setImagePath(){ 
    if (this.venue.type === "BAR"){ 
      this.imagePath = "assets/Icons/icon_beer_96.png";
    }else if (this.venue.type === "NIGHT_CLUB"){ 
      this.imagePath = "assets/Icons/icon_dancing2_96.png"
    }else{ 
      this.imagePath = "assets/Icons/icon_disco2_100.png"
    }
  }
}
