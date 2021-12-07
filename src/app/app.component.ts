import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  addNumber() {
      this.numbers.push(this.numbers.length);
  }

  isOdd(number: number) {
    return (number % 2) == 1;
  }

  isEven(number: number) {
    return (number % 2) == 0;
  }
}
