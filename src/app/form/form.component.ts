import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.controls.email.value);
      console.log(this.form.controls.password.value);
      console.log(this.form.controls.subscription.value);
      this.form.reset();
    } else {
      console.log(this.form.control);
    }
  }
}
