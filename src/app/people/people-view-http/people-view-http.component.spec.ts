import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewHttpComponent } from './people-view-http.component';

describe('PeopleViewHttpComponent', () => {
  let component: PeopleViewHttpComponent;
  let fixture: ComponentFixture<PeopleViewHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleViewHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleViewHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
