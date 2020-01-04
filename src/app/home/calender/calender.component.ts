import { Component, OnInit, Input} from '@angular/core';
import * as dateFormat from 'dateformat';
import { CalenderService } from 'src/app/shared/calender.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  @Input() dateToday: string;
  @Input() dateTomorrow: string;
  @Input() dateTheDayAfterTomorrow: string;

  activeToday:boolean; 
  activeTomorrow:boolean; 
  activeTheDayAfterTomorrow:boolean; 


  constructor(private calenderService:CalenderService) {
    this.getFormattedDates(); 
    this.activateToday();
  }

  ngOnInit() {
     
  }

  getFormattedDates() {
    let currentDate = new Date();
    this.dateToday = dateFormat(currentDate, "dd'-'mm'-'yyyy");
    currentDate.setDate(currentDate.getDate() + 1);
    this.dateTomorrow = dateFormat(currentDate, "dd'-'mm'-'yyyy");
    currentDate.setDate(currentDate.getDate() + 1);
    this.dateTheDayAfterTomorrow = dateFormat(currentDate, "dd'-'mm'-'yyyy");
  }

  activateToday(){ 
    this.calenderService.dateSelected.emit(this.dateToday); 
  }

  activateTomorrow() {
    this.calenderService.dateSelected.emit(this.dateTomorrow);
  }

  activateTheDayAfterTomorrow() {
    this.calenderService.dateSelected.emit(this.dateTheDayAfterTomorrow);
  }


}
