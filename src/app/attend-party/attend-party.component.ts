import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Venue } from '../shared/venue.model';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attend-party',
  templateUrl: './attend-party.component.html',
  styleUrls: ['./attend-party.component.css']
})
export class AttendPartyComponent implements OnInit,OnChanges {
  @Input() venueToShow: Venue; 
  day_venue_doc: AngularFirestoreDocument<Venue>; 
  day_venue: Observable<Venue>; 
  venueLive: Venue; 
  everythingLoaded: boolean = false; 

  imagePath: string; 
  nationalitiesList: string[] = []; 
  userID:string = ""; 
  clicked:boolean; 



  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private db:AngularFirestore) {}

   ngOnInit() { 
   this.setFreshComponent(); 
  }

  ngOnChanges(){ 
    this.setFreshComponent();
    this.setImagePath()  
    this.setNationaltiesList(); 
  }

  setFreshComponent(){ 
    this.setQueries(); 
    this.getUserId(); 
    this.getVenueLive(); 
  }

  setQueries(){ 
    this.day_venue_doc = this.db.collection("Kaunas,LT_dates").doc("21-11-2019").collection("day_venues").doc(this.venueToShow.venueName);
    this.day_venue = this.day_venue_doc.valueChanges(); 
  }

  getVenueLive(){ 
    this.day_venue.subscribe(res => { 
      this.venueLive = res;  
      this.setButton(); 
      this.everythingLoaded = true;      
    })

  }

  getUserId(){ 
      this.afAuth.auth.onAuthStateChanged( (user) => {
        if (user) {
           this.userID = user.uid;
        } else {
          this.userID = "";
        } 
      });  
  }
  
  setButton(){ 
    if (this.venueLive.guestList.includes(this.userID)) {   
      this.clicked=true; 
    }else{ 
      this.clicked=false; 
    }
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
