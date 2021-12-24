import {Component, OnInit} from "@angular/core";
import {Post} from "./post.module";
import {AppConfig} from "../app.config";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  isFetching: boolean = false;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
  }

  onFetchPosts() {
    this.isFetching = true;
    this.http.get<Post[]>(AppConfig.API_ENDPOINT + 'posts')
      .subscribe((posts) => {
        this.isFetching = false;
        this.posts = posts;
      });
  }

  onClearPosts() {
    this.posts = [];
  }
}
