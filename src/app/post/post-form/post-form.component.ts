import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../app.config";
import {Post} from "../post.module";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @ViewChild('form') form: FormGroup;
  @ViewChild('title') title: FormControl;
  @ViewChild('content') content: FormControl;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.form);
  }
}
