import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityCardComponent } from './nationality-card.component';

describe('NationalityCardComponent', () => {
  let component: NationalityCardComponent;
  let fixture: ComponentFixture<NationalityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
