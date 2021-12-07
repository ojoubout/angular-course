import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalID: number;
  @Output() onSecondTick: EventEmitter<number>;

  constructor() {
    this.intervalID = 0;
    this.onSecondTick = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  startInterval() {
    if (this.intervalID == 0) {
      this.intervalID = setInterval(() => {this.onSecondTick.emit(2)}, 1000);
    }
  }

  stopInterval() {
    clearInterval(this.intervalID);
    this.intervalID = 0;
  }

}
