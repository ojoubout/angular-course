import {Component, OnInit} from "@angular/core";
import {Post} from "./post.module";
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  isFetching: boolean = false;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.posts = [];
  }

  fetchPosts() {
    this.isFetching = true;
    this.postsService.getPosts().subscribe(posts => {
      this.isFetching = false;
      this.posts = posts;
    })

  }
}
