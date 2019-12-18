import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from '../shared/venue.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CalenderService } from '../shared/calender.service';
import * as dateFormat from 'dateformat';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {
  day_venues: Observable<Venue[]>;
  day_venuesCollection: AngularFirestoreCollection<Venue>;
  dateSelected:string; 


  constructor(private db: AngularFirestore, private calenderService: CalenderService) {
    this.setFormattedInitialDate(); 
  }

  ngOnInit() {
    this.setVenuesToShow();
  }

  ngOnChanges(){ 
  }

  setFormattedInitialDate() {
    let currentDate = new Date();
    this.dateSelected = dateFormat(currentDate, "dd'-'mm'-'yyyy");
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
      }
      );
  }
}
