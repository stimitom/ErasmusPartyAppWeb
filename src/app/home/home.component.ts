import { Component, OnInit } from '@angular/core';
import { Venue } from '../shared/venue.model';
import { VenueService } from '../shared/venue.service';
import { AuthService } from '../shared/auth.service';
import { ResponsiveService } from '../shared/responsive.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  venueSelected: Venue;
  user: firebase.User; 
  public isMobile: boolean; 

  constructor(private venueService: VenueService, private auth:AuthService,private router:Router, private responsiveService:ResponsiveService) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
        if (!this.user) {
          this.router.navigate(['/login']);
        }
      });     

    this.onResize()
    this.responsiveService.checkWidth(); 

    this.venueService.venueSelected
      .subscribe(
        (venue: Venue) => {
          this.venueSelected = venue;
        }
      )

  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

}
