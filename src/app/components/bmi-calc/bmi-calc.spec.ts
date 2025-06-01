import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalc } from './bmi-calc';

describe('BmiCalc', () => {
  let component: BmiCalc;
  let fixture: ComponentFixture<BmiCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
