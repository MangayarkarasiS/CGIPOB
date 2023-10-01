import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExComponent } from './mat-ex.component';

describe('MatExComponent', () => {
  let component: MatExComponent;
  let fixture: ComponentFixture<MatExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
