import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Post} from "../post.module";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @ViewChild('form') form: FormGroup;
  @ViewChild('title') title: FormControl;
  @ViewChild('content') content: FormControl;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    let title: string = this.form.controls.title.value;
    let content: string = this.form.controls.content.value;
    let post: Post = {title: title, content: content};

    this.postsService.createPost(post);
    console.log(post);
  }
}
