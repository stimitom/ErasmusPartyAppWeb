import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { VenuesListComponent } from './venues-list/venues-list.component';
import { AttendPartyComponent } from './attend-party/attend-party.component';
import { VenueComponent } from './venues-list/venue/venue.component';
import { VenueService } from './shared/venue.service';
import { NationalityCardComponent } from './attend-party/nationality-card/nationality-card.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    VenuesListComponent,
    AttendPartyComponent,
    VenueComponent,
    NationalityCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule, 
    AngularFireAuthModule
  ],
  providers: [VenueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
