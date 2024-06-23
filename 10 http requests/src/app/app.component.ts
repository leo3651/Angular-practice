import { Component, OnInit } from '@angular/core';
import { IPost } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: IPost[] = [];
  isFetching: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: IPost) {
    this.postService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.deleteAllPosts().subscribe((response) => {
      console.log(response);
      this.loadedPosts = [];
    });
  }

  fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.isFetching = false;
    });
  }
}
