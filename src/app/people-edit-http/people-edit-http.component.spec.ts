import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEditHttpComponent } from './people-edit-http.component';

describe('PeopleEditHttpComponent', () => {
  let component: PeopleEditHttpComponent;
  let fixture: ComponentFixture<PeopleEditHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleEditHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleEditHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
