import { EventEmitter } from '@angular/core';
import { Venue } from './venue.model';

export class VenueService{ 
    venueSelected = new EventEmitter<Venue>(); 
}