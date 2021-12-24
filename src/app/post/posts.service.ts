import {Injectable} from "@angular/core";
import {Post} from "./post.module";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../app.config";

@Injectable({providedIn: 'root'})
export class PostsService {

  private api_url = AppConfig.API_ENDPOINT + 'posts';

  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    return this.http.post(this.api_url, post);
  }

  getPosts() {
    return this.http.get<Post[]>(this.api_url);
  }
}
