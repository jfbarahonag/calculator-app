import { Component, EventEmitter, Output } from '@angular/core';

type OperatorType = '+' | '-' | '/' | '*';
const operations: {[key in OperatorType]: (a: number, b: number) => number} = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Output() newResult = new EventEmitter<number>();
  
  a: number = 0;
  b: number = 0;

  calculate(operator: OperatorType): void {
    const res = operations[operator](this.a, this.b);
    this.newResult.emit(res);
  }
}
