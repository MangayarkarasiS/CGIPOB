import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListHttpComponent } from './people-list-http.component';

describe('PeopleListHttpComponent', () => {
  let component: PeopleListHttpComponent;
  let fixture: ComponentFixture<PeopleListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
