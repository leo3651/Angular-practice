import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { Subject, catchError, map, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  error: Subject<string> = new Subject();

  constructor(private http: HttpClient) {}
  createAndStorePosts(title: string, content: string) {
    const postData: IPost = { title, content };
    this.http
      .post<{ name: string }>(
        'https://lithe-lens-248116-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        { observe: 'response', responseType: 'json' }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => this.error.next('POST: ' + error.message)
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: IPost }>(
        'https://lithe-lens-248116-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((response) => {
          const postsArray: IPost[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key))
              postsArray.push({ ...response[key], id: key });
          }
          return postsArray;
        }),
        catchError((err) => {
          console.log('CATCH ERROR: ', err);
          return throwError(err);
        })
      );
  }

  deleteAllPosts() {
    return this.http
      .delete(
        'https://lithe-lens-248116-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        { observe: 'events', responseType: 'text' }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
