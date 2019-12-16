import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Venue } from '../shared/venue.model';
import { User } from '../shared/user.model';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import  * as dateFormat from 'dateformat';

@Component({
  selector: 'app-attend-party',
  templateUrl: './attend-party.component.html',
  styleUrls: ['./attend-party.component.css']
})
export class AttendPartyComponent implements OnInit,OnChanges {
  @Input() venueToShow: Venue; 
  date: string = "21-11-2019"; 
  day_venue_doc: AngularFirestoreDocument<Venue>; 
  day_venue$: Observable<Venue>; 
  venueLive: Venue; 

  user_doc: AngularFirestoreDocument<User>; 
  user$: Observable<User>
  userLive: User; 
  usersCounterMappingChanged: boolean;
  usersVenueCountName: string;  
  usersVenueCountNumber: number; 
  usersHashMap:Map<string,string> = new Map; 

  venueLoaded: boolean = false; 

  imagePath: string; 
  nationalitiesList: string[] = []; 
  userID:string = ""; 
  clicked:boolean; 
  admin:any; 




  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private db:AngularFirestore ) {}

   ngOnInit() { 
   this.setFreshComponent();   
   }

  ngOnChanges(){ 
    this.setFreshComponent();
    this.setImagePath(); 
    this.setNationaltiesList(); 
  }


   setFreshComponent(){ 
    this.setQueries(); 
    this.getVenueLive();  
    this.getUser(); 
  }

  async setQueries(){ 
    this.day_venue_doc = this.db.collection("Kaunas,LT_dates").doc(this.date).collection("day_venues").doc(this.venueToShow.venueName);
    this.day_venue$ = this.day_venue_doc.valueChanges(); 
  }

  getVenueLive(){ 
   this.day_venue$.subscribe(res => { 
      this.venueLive = res;  
      this.setButton(); 
      this.venueLoaded = true;      
    })
  }

  ////////////////////
  // GET USER INFO //

  async getUser(){ 
    await this.getUserId(); 
   this.db.collection("users").doc(this.userID).get().toPromise().then(res => { 
     // Checks if user already has given date field
     let user =res.data(); 
     let containsDate = false; 
     for (const field in user) {
       if (field == this.date) {
         containsDate = true; 
         break; 
     }
    }

    //Adjusts user accordingly to value of containsDate
    this.getUserVenueCountAndMapping(containsDate, user); 


   });
  }

  getUserVenueCountAndMapping(containsDate: boolean, user:any){ 
    let listSize:number = 0; 
    let userListNames: string[]; 
    if (user.listnames != null) {
      for(let element in user.listnames){
        userListNames.push(element)
      }
      listSize = user.listnames.length; 
    }
        
    if (containsDate) {
      this.usersCounterMappingChanged = false; 
      this.usersVenueCountName = user.countermapping.get(this.date);
      switch (this.usersVenueCountName) {
        case "counterpos0":{
          this.usersVenueCountNumber = user.counterpos0;
          break;
        }
        case "counterpos1":{
          this.usersVenueCountNumber = user.counterpos1;
          break;
      }
        case "counterpos2":{
          this.usersVenueCountNumber = user.counterpos2;
          break;
        }
        default:{
          break;
        }
      }

    } 
    else{ 
      this.usersCounterMappingChanged = true;
      // new List wil be initialized,a counter needs to be set
      switch (listSize) {
        case 3:
          this.cleanUser(user.countermapping,userListNames);
          break;
        case 2:
          this.usersVenueCountName = "counterpos2"; 
          for(let [key,value] of user.countermapping){ 
            this.usersHashMap.set(key,value); 
          }
          this.usersHashMap.set(this.date, this.usersVenueCountName);
          break;
        case 1:
          this.usersVenueCountName = "counterpos1";
          for (let [key, value] of user.countermapping) {
            this.usersHashMap.set(key, value);
          }
          this.usersHashMap.set(this.date,this.usersVenueCountName);
          break;
        default:
          this.usersVenueCountName = "counterpos0";
          this.usersHashMap.set(this.date, this.usersVenueCountName);
          break;
      }
      this.usersVenueCountNumber = 0;
    }
  }

  cleanUser(counterMapping: Map<string,string>, userListNames:string[]){ 
  let oldestDateString:string = this.getOldestDateString(counterMapping);

  //Find the oldest countername in the hashmap
  let oldestCounter:string = this.usersHashMap.get(oldestDateString);

  //remove the oldest key-value pair from the hashmap
  this.usersHashMap.delete(oldestDateString);

  //set the venuecountname to the oldest one which is now free
  this.usersVenueCountName = oldestCounter;

  //add the new date to the hashmap
  this.usersHashMap.set(this.date, this.usersVenueCountName);
  
  
  //Clean oldest Date from Listnames
    for (let i = 0; i < userListNames.length; i++) {
      if (userListNames[i] === oldestDateString) {
        userListNames.splice(i, 1);
      }
    }

  this.user_doc.update({listnames: userListNames});
}

  getOldestDateString(counterMapping: Map<string, string>) {
  //Finds and cleans the oldest counter and deletes it from map
  //returns String of the oldest Counter that can be used again
    for (let [key, value] of counterMapping) {
      this.usersHashMap.set(key, value);
    }

  let oldestDate:Date = null; 
  let checkDate: Date = null;
  let typescriptFormattedDates: string[]; 
    for (let javaFormattedDate of this.usersHashMap.keys()){
      typescriptFormattedDates.push(javaFormattedDate.substring(3,5) + "/" + javaFormattedDate.substring(0,2) + "/" + javaFormattedDate.substring(6))
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
  let oldestDateString:string = dateFormat(oldestDate,'dd"-"mm"-"yyyy');
  return oldestDateString;
}
 
getUserLive(){ 
    this.user$.subscribe(res => { 
      this.userLive = res; 
    })    
  }

  getUserId(): Promise<boolean>{ 
      this.afAuth.auth.onAuthStateChanged( (user) => {
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
  
  ////////////////////

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

  updateDbGoing(){ 
  // if (this.userLive.) {
    
  
      this.updateVenueSideGoing(); 
      this.updateUserSideGoing(); 
  }

  updateVenueSideGoing(){ 

  }

  updateUserSideGoing(){ 

  }




}
