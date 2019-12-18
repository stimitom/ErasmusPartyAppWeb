import { EventEmitter } from '@angular/core';


export class CalenderService {
    dateSelected = new EventEmitter<string>();
}