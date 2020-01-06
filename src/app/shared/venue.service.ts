import { EventEmitter } from '@angular/core';
import { Venue } from './venue.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VenueService{ 
    venueSelected = new EventEmitter<Venue>(); 
}