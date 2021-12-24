import {Component, Input, OnInit} from "@angular/core";
import {Post} from "../post.module";

@Component({
  selector: 'app-post-item',
  templateUrl: 'post-item.component.html'
})
export  class PostItemComponent implements OnInit {

  @Input('post') post: Post;

  constructor() {}

  ngOnInit() {}

}
