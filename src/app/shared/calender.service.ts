import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import * as dateFormat from 'dateformat';

@Injectable({
    providedIn: 'root'
})
export class CalenderService {

    constructor(){
        this.setFormattedInitialDate(); 
    }

    initialDate:string; 
    dateSelected = new BehaviorSubject<string>(this.initialDate);

    setFormattedInitialDate() {
        let currentDate = new Date();
        this.initialDate = dateFormat(currentDate, "dd'-'mm'-'yyyy");
    }
}

// // 
// import { EventEmitter } from '@angular/core';
// import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
// export class CalenderService {
//     dateSelected = new EventEmitter<string>();
// }