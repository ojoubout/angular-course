import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WarnAlertComponent} from "./alert/warn-alert/warn-alert.component";
import { SuccessAlertComponent } from './alert/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarnAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
