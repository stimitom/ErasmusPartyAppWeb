import { Component, OnInit, Input } from '@angular/core';
import { Venue } from 'src/app/shared/venue.model';
import { VenueService } from 'src/app/shared/venue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-mobile',
  templateUrl: './venue-mobile.component.html',
  styleUrls: ['./venue-mobile.component.css']
})
export class VenueMobileComponent implements OnInit {
  @Input() venue: Venue;
  imagePath: string;
  
  constructor(private router: Router, private venueService: VenueService) {}

  ngOnInit() {
    this.setImagePath();
  }

  onSelected() {
    this.venueService.venueSelected.next(this.venue);
    this.router.navigate(['/venue/m']);
  }

  setImagePath() {
    if (this.venue.type === "BAR") {
      this.imagePath = "assets/Icons/icon_beer_96.png";
    } else if (this.venue.type === "NIGHT_CLUB") {
      this.imagePath = "assets/Icons/icon_dancing2_96.png"
    } else {
      this.imagePath = "assets/Icons/icon_disco2_100.png"
    }
  }

}

