import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: IPost[] = [];
  isFetching: boolean = false;
  error = null;
  errorSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe((error) => {
      this.error = error;
    });

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
      //console.log(response);
      this.loadedPosts = [];
    });
  }

  fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      (error) => {
        console.log('SUBSCRIBE ERROR: ', error);
        this.error = 'GET: ' + error.message;
        this.isFetching = false;
      }
    );
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
