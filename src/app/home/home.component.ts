import { Component, OnInit } from '@angular/core';
import { Venue } from '../shared/venue.model';
import { VenueService } from '../shared/venue.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  venueSelected: Venue;
  user: firebase.User; 

  constructor(private venueService: VenueService, private auth:AuthService,private router:Router ) { }

  ngOnInit() {
    this.venueService.venueSelected
      .subscribe(
        (venue: Venue) => {
          this.venueSelected = venue;
        }
      )

    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (!this.user) {
          this.router.navigate(['/login']);
        }
      });

      
  }

}
