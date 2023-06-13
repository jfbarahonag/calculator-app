import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator App';

  result: number = 0;

  assignResult(res: number) {
    this.result = res;
  }
}
