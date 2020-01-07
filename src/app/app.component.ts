import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from './shared/responsive.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ErasmusPartyAppWeb';

  constructor(private responsiveService:ResponsiveService){}
  
  ngOnInit(){ 
    this.responsiveService.getMobileStatus().subscribe(); 
    this.onResize(); 
  }

  onResize(){ 
    this.responsiveService.checkWidth(); 
  }

}
