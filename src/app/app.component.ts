import { Component } from '@angular/core';

type OperatorType = '+' | '-' | '/' | '*';
const operations: {[key in OperatorType]: (a: number, b: number) => number} = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator App';

  calc = {
    A: 0,
    B: 0,
    result: 0,
  };

  calculate(operator: OperatorType): void {
    this.calc.result = operations[operator](this.calc.A, this.calc.B);
  }
}
