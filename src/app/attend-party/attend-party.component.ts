import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Venue } from '../shared/venue.model';
import { User } from '../shared/user.model';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import * as dateFormat from 'dateformat';
import { CalenderService } from '../shared/calender.service';

@Component({
  selector: 'app-attend-party',
  templateUrl: './attend-party.component.html',
  styleUrls: ['./attend-party.component.css']
})
export class AttendPartyComponent implements OnInit, OnChanges {
  @Input() venueToShow: Venue;
  dateToShow: string; 
  dateSelected: string;

  private firedb;
  day_venue_ref: any;
  user_ref: any;

  day_venue_doc: AngularFirestoreDocument<Venue>;
  day_venue$: Observable<Venue>;
  venueLive: Venue;
  venueUsersNationalitiesMap: {} = {};

  user_doc: AngularFirestoreDocument<User>;
  user$: Observable<User>
  userLive: User;
  usersCounterMappingChanged: boolean;
  usersVenueCountName: string;
  usersVenueCountNumber: number;
  usersHashMap: {} = {};
  userID: string = "";
  userNationality: string;

  venueLoaded: boolean = false;

  imagePath: string;
  nationalitiesList: any[] = [];
  clicked: boolean;
  admin: any;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private db: AngularFirestore, private calenderService: CalenderService) {
    this.firedb = firebase.firestore(); 
    this.setFormattedInitialDate(); 
  }

  ngOnInit() {
    this.selectDate(); 
    this.setFreshComponent();
  }

  ngOnChanges() {
    this.setFreshComponent();
    this.setImagePath();
    this.setNationaltiesList();
  }

  /// Date Methods /// 

  setFormattedInitialDate() {
    let currentDate = new Date();
    this.dateSelected = dateFormat(currentDate, "dd'-'mm'-'yyyy");
  }

  selectDate() {
    this.calenderService.dateSelected
      .subscribe(date => {
        this.dateSelected = date;
        console.log("from attend party: " + this.dateSelected);
      }
      );
  }

  ///Set general queries and frontend ///
  setFreshComponent() {
    this.setQueries();
    this.getVenueLive();
    this.getUser();
  }

  async setQueries() {
    this.day_venue_doc = this.db.collection("Kaunas,LT_dates").doc(this.dateSelected).collection("day_venues").doc(this.venueToShow.venueName);
    this.day_venue$ = this.day_venue_doc.valueChanges();
    this.day_venue_ref = this.firedb.collection("Kaunas,LT_dates").doc(this.dateSelected).collection("day_venues").doc(this.venueToShow.venueName);
  }

  getVenueLive() {
    this.day_venue$.subscribe(res => {
      this.venueLive = res;
      for (let [key, value] of Object.entries(this.venueLive.usersNationalitiesMap)) {
        this.venueUsersNationalitiesMap[key] = value;
      }
      this.setButton();
      this.venueLoaded = true;
    })
  }

  ////////////////////
  // GET USER INFO //

  async getUser() {
    await this.getUserId();
    this.user_ref = this.firedb.collection("users").doc(this.userID);
    this.db.collection("users").doc(this.userID).get().toPromise().then(res => {
      // Checks if user already has given date field   
      let user = res.data();
      let containsDate = false;
      for (const field in user) {
        if (field == this.dateSelected) {
          containsDate = true;
          break;
        }
      }
      this.userNationality = user.nationality;

      //Adjusts user accordingly to value of containsDate
      this.getUserVenueCountAndMapping(containsDate, user);
    });
  }

  getUserVenueCountAndMapping(containsDate: boolean, user: any) {
    let listSize: number = 0;
    if (user.listnames != null) {
      listSize = user.listnames.length;
    }

    if (containsDate) {
      this.usersCounterMappingChanged = false;
      this.usersVenueCountName = user.countermapping[this.dateSelected];
      switch (this.usersVenueCountName) {
        case "counterpos0": {
          this.usersVenueCountNumber = user.counterpos0;
          break;
        }
        case "counterpos1": {
          this.usersVenueCountNumber = user.counterpos1;
          break;
        }
        case "counterpos2": {
          this.usersVenueCountNumber = user.counterpos2;
          break;
        }
        default: {
          break;
        }
      }

    }
    else {
      this.usersCounterMappingChanged = true;
      // new List wil be initialized,a counter needs to be set
      switch (listSize) {
        case 3:
          this.cleanUser(user.countermapping);
          break;
        case 2:
          this.usersVenueCountName = "counterpos2";
          for (let [key, value] of Object.entries(user.countermapping)) {
            this.usersHashMap[key] = value;
          }
          this.usersHashMap[this.dateSelected] = this.usersVenueCountName;
          break;
        case 1:
          this.usersVenueCountName = "counterpos1";
          for (let [key, value] of Object.entries(user.countermapping)) {
            this.usersHashMap[key] = value;
          }
          this.usersHashMap[this.dateSelected] = this.usersVenueCountName;
          break;
        default:
          this.usersVenueCountName = "counterpos0";
          this.usersHashMap[this.dateSelected] = this.usersVenueCountName;
          break;
      }
      this.usersVenueCountNumber = 0;
    }
  }

  cleanUser(counterMapping: {}) {
    let oldestDateString: string = this.getOldestDateString(counterMapping);

    //Find the oldest countername in the hashmap
    let oldestCounter: string = this.usersHashMap[oldestDateString];

    //remove the oldest key-value pair from the hashmap
    delete this.usersHashMap[oldestDateString];

    //set the venuecountname to the oldest one which is now free
    this.usersVenueCountName = oldestCounter;

    //add the new date to the hashmap
    this.usersHashMap[this.dateSelected] = this.usersVenueCountName;


    //Clean oldest Date from Listnames
    this.user_doc.update({ listnames: firebase.firestore.FieldValue.arrayRemove(oldestDateString) })
  }

  getOldestDateString(counterMapping: {}) {
    //Finds and cleans the oldest counter and deletes it from map
    //returns String of the oldest Counter that can be used again
    for (let [key, value] of Object.entries(counterMapping)) {
      this.usersHashMap[key] = value;
    }

    let oldestDate: Date = null;
    let checkDate: Date = null;
    let typescriptFormattedDates: string[];
    for (let javaFormattedDate of Object.keys(this.usersHashMap)) {
      typescriptFormattedDates.push(javaFormattedDate.substring(3, 5) + "/" + javaFormattedDate.substring(0, 2) + "/" + javaFormattedDate.substring(6))
    }

    for (let dateStringKey of typescriptFormattedDates) {
      if (oldestDate == null) {
        oldestDate = new Date(dateStringKey);
      } else {
        checkDate = new Date(dateStringKey);
        if (checkDate < oldestDate) {
          oldestDate = checkDate;
        }
      }
    }
    let oldestDateString: string = dateFormat(oldestDate, 'dd"-"mm"-"yyyy');
    return oldestDateString;
  }

  getUserLive() {
    this.user$.subscribe(res => {
      this.userLive = res;
    })
  }

  getUserId(): Promise<boolean> {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userID = user.uid;
        return Promise.resolve(true);
      } else {
        this.userID = "";
        return Promise.resolve(false);
      }
    });
    return Promise.resolve(true);
  }

  ///////////////////// 
  // Set Frontend Local Properties // 

  setButton() {
    if (this.venueLive.guestList.includes(this.userID)) {
      this.clicked = true;
    } else {
      this.clicked = false;
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

  setNationaltiesList() {
    const list: Map<string, string> = this.venueToShow.usersNationalitiesMap;
    this.nationalitiesList.length = 0;
    for (let nationality of Object.values(list)) {
      if (!this.nationalitiesList.includes(nationality)) {
        this.nationalitiesList.push(nationality);
      }
    }
  }



  //// UPDATE DATABASE /////
  /// GOING //
  updateDbGoing() {
    console.log("update with date: " + this.dateSelected);
    
    if (this.usersVenueCountNumber <= 2) {
      const batch = this.firedb.batch();
      ++this.venueToShow.numberOfAttendees;
      this.updateVenueSideGoing(batch);
      this.updateUserSideGoing(batch);
      batch.commit();
    } else {
      alert("You can only visit 3 venues per day.")
    }
  }

  updateVenueSideGoing(batch: firebase.firestore.WriteBatch) {
    console.log(this.userNationality);

    this.venueUsersNationalitiesMap[`${this.userID}`] = this.userNationality;
    if (!this.nationalitiesList.includes(this.userNationality)) {
      this.nationalitiesList.push(this.userNationality);
    }
    batch.update(this.day_venue_ref, { numberOfAttendees: firebase.firestore.FieldValue.increment(1) });
    batch.update(this.day_venue_ref, { usersNationalitiesMap: this.venueUsersNationalitiesMap });
    batch.update(this.day_venue_ref, { guestList: firebase.firestore.FieldValue.arrayUnion(this.userID) });
  }

  updateUserSideGoing(batch: firebase.firestore.WriteBatch) {
    batch.update(this.user_ref, { [`${this.dateSelected}`]: firebase.firestore.FieldValue.arrayUnion(this.venueLive.venueName) });
    batch.update(this.user_ref, { [`${this.usersVenueCountName}`]: firebase.firestore.FieldValue.increment(1) });
    batch.update(this.user_ref, { listnames: firebase.firestore.FieldValue.arrayUnion(this.dateSelected) });
    if (this.usersCounterMappingChanged) batch.update(this.user_ref, { countermapping: this.usersHashMap });
  }

  /// NOT GOING /// 

  updateDbNotGoing() {
    const batch = this.firedb.batch();
    --this.venueToShow.numberOfAttendees;
    this.updateVenueSideNotGoing(batch);
    this.updateUserSideNotGoing(batch);
    batch.commit();
  }

  updateVenueSideNotGoing(batch: firebase.firestore.WriteBatch) {
    delete this.venueUsersNationalitiesMap[this.userID];
    this.nationalitiesList = [];
    for (let nationality of Object.values(this.venueUsersNationalitiesMap)) {
      if (!this.nationalitiesList.includes(nationality)) {
        this.nationalitiesList.push(nationality);
      }
    }
    batch.update(this.day_venue_ref, { usersNationalitiesMap: this.venueUsersNationalitiesMap });
    batch.update(this.day_venue_ref, { guestList: firebase.firestore.FieldValue.arrayRemove(this.userID) });
    batch.update(this.day_venue_ref, { numberOfAttendees: firebase.firestore.FieldValue.increment(-1) });
  }

  updateUserSideNotGoing(batch: firebase.firestore.WriteBatch) {
    batch.update(this.user_ref, { [`${this.dateSelected}`]: firebase.firestore.FieldValue.arrayRemove(this.venueLive.venueName) });
    batch.update(this.user_ref, { [`${this.usersVenueCountName}`]: firebase.firestore.FieldValue.increment(-1) });
  }
}
