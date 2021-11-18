import {Component} from "@angular/core";

@Component({
  selector: 'display-details',
  templateUrl: 'display-details.component.html',
  styleUrls: ['display-details.component.css']
})
export class DisplayDetailsComponent {
  showParagraph = false;
  clicks: number[] = [];

  onClickDisplayDetails() {
    this.showParagraph = !this.showParagraph;
    this.clicks.push(Date.now());
  }
}
