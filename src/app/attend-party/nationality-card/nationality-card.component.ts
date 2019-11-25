import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nationality-card',
  templateUrl: './nationality-card.component.html',
  styleUrls: ['./nationality-card.component.css']
})
export class NationalityCardComponent implements OnInit {
  @Input() nationality:string; 

  constructor() { }

  ngOnInit() {
  }

  setFlagIcon(){ 
    switch(this.nationality){ 
      
    }
  }
}
