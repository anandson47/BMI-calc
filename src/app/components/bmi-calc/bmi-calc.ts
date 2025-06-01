import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calc',
  imports: [CommonModule],
  templateUrl: './bmi-calc.html',
  styleUrl: './bmi-calc.css'
})
export class BmiCalc {
  bmi: number = 0;
  weight: number = 0;
  height: number = 0;
  bmiCategory: string = '';
  resultCalculated: boolean = false;
  bmiCategories: { [key: string]: string } = {
    'underweight': 'Underweight',
    'normal': 'Normal weight',
    'overweight': 'Overweight',
    'obese': 'Obesity'
  };
}
