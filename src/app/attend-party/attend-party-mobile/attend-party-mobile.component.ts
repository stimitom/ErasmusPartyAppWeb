import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/responsive.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-attend-party-mobile',
  templateUrl: './attend-party-mobile.component.html',
  styleUrls: ['./attend-party-mobile.component.css']
})
export class AttendPartyMobileComponent implements OnInit {
  
  constructor(private responsiveService: ResponsiveService, private router:Router) { }

  ngOnInit() {
    this.onResize()
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      if (isMobile == false) {
        this.router.navigate(['/home']); 
      }
    });
  }
}
