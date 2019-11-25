import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Venue } from '../shared/venue.model';

@Component({
  selector: 'app-attend-party',
  templateUrl: './attend-party.component.html',
  styleUrls: ['./attend-party.component.css']
})
export class AttendPartyComponent implements OnInit,OnChanges {
  @Input() venueToShow: Venue; 
  imagePath: string; 
  nationalitiesList: string[] = []; 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){ 
    this.setImagePath()  
    this.setNationaltiesList(); 
    console.log(this.nationalitiesList);
    
  }

  setImagePath() {
    if (this.venueToShow.type === "BAR") {
      this.imagePath = "assets/Icons/icon_beer_96.png";
    } else if (this.venueToShow.type === "NIGHT_CLUB") {
      this.imagePath = "assets/Icons/icon_dancing2_96.png"
    } else {
      this.imagePath = "assets/Icons/icon_disco2_100.png"
    }
  }

  setNationaltiesList(){ 
    const list: Map<string,string> = this.venueToShow.usersNationalitiesMap; 
    this.nationalitiesList.length = 0;  
    for(let nationality of Object.values(list)){ 
      if(!this.nationalitiesList.includes(nationality)){ 
        this.nationalitiesList.push(nationality);
      }
    }
  }

}
