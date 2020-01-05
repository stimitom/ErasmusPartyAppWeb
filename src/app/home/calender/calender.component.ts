import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import * as dateFormat from 'dateformat';
import { CalenderService } from 'src/app/shared/calender.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class CalenderComponent implements OnInit {
  @Input() dateToday: string;
  @Input() dateTomorrow: string;
  @Input() dateTheDayAfterTomorrow: string;

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

  onTabClicked(event: MatTabChangeEvent){ 
    if (event.index == 0) {
      this.activateToday(); 
    }else if(event.index == 1){ 
      this.activateTomorrow()
    }else if (event.index == 2) {
      this.activateTheDayAfterTomorrow(); 
    } 
  }
}
