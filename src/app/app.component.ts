import { Component } from '@angular/core';

type OperatorType = '+' | '-' | '/' | '*'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';

  calc = {
    A: 0,
    B: 0,
    result: 0,
  };

  calculate(operator: OperatorType) {
    if (operator === '+') {
      this.calc.result = this.calc.A + this.calc.B
    } else if (operator === '-') {
      this.calc.result = this.calc.A - this.calc.B
    } else if (operator === '/') {
      this.calc.result = this.calc.A / this.calc.B
    } else if (operator === '*') {
      this.calc.result = this.calc.A * this.calc.B
    }
  }
}
