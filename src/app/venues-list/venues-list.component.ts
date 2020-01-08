import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from '../shared/venue.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CalenderService } from '../shared/calender.service';
import * as dateFormat from 'dateformat';
import { ResponsiveService } from '../shared/responsive.service';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {
  day_venues: Observable<Venue[]>;
  day_venuesCollection: AngularFirestoreCollection<Venue>;
  dateSelected:string; 
  public isMobile:boolean; 


  constructor(private db: AngularFirestore, private calenderService: CalenderService, private responsiveService:ResponsiveService) {
    this.setFormattedInitialDate(); 
  }

  ngOnInit() {
    this.setVenuesToShow();
    this.selectDate();
    this.onResize()
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
  

  setFormattedInitialDate() {
    let currentDate = new Date();
    this.dateSelected = dateFormat(currentDate, "dd'-'mm'-'yyyy");
    this.calenderService.dateSelected.next(this.dateSelected); 
    console.log("date emitted from venueslist: "  + this.dateSelected);
    
  }

  setVenuesToShow() {
    this.day_venuesCollection = this.db.collection("Kaunas,LT_dates").doc(this.dateSelected).collection("day_venues",
      (ref) => {
        return ref.orderBy('numberOfAttendees', 'desc');
      });
    this.day_venues = this.day_venuesCollection.valueChanges();
  }


  selectDate() {
    this.calenderService.dateSelected
      .subscribe(date => {
        this.dateSelected = date;
        console.log("dateSelected:" + this.dateSelected);
        this.setVenuesToShow(); 
      }
      );
      
  }
}
