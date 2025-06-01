import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiCalc } from "./components/bmi-calc/bmi-calc";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BmiCalc , CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bmi';
}
