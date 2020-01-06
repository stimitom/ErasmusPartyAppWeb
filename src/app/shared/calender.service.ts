import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalenderService {
    dateSelected = new EventEmitter<string>();
}