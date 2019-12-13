import { Component, OnInit } from '@angular/core';
import { Venue } from '../shared/venue.model';
import { VenueService } from '../shared/venue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  venueSelected: Venue;

  constructor(private venueService: VenueService) { }

  ngOnInit() {
    this.venueService.venueSelected
      .subscribe(
        (venue: Venue) => {
          this.venueSelected = venue;
        }
      )
  }

}
