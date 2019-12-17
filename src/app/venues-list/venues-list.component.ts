import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venue } from '../shared/venue.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {
  day_venues: Observable<Venue[]>; 
  day_venuesCollection: AngularFirestoreCollection<Venue>; 

  constructor(private db: AngularFirestore) {
   }

  ngOnInit() {
    this.day_venuesCollection = this.db.collection("Kaunas,LT_dates").doc("22-11-2019").collection("day_venues", 
    (ref) => { 
        return ref.orderBy('numberOfAttendees', 'desc'); 
    } );
    this.day_venues = this.day_venuesCollection.valueChanges(); 
  }

}
