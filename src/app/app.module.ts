import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post/post-form/post-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PostItemComponent} from "./post/post-item/post-item.component";
import {PostComponent} from "./post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    PostItemComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
