import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendPartyComponent } from './attend-party.component';

describe('AttendPartyComponent', () => {
  let component: AttendPartyComponent;
  let fixture: ComponentFixture<AttendPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
