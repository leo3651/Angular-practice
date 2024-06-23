import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}
  createAndStorePosts(title: string, content: string) {
    const postData: IPost = { title, content };
    this.http
      .post<{ name: string }>(
        'https://lithe-lens-248116-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: IPost }>(
        'https://lithe-lens-248116-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((response) => {
          const postsArray: IPost[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key))
              postsArray.push({ ...response[key], id: key });
          }
          return postsArray;
        })
      );
  }

  deleteAllPosts() {
    return this.http.delete(
      'https://lithe-lens-248116-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
