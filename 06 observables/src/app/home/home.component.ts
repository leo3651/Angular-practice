import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  private customObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    console.log('HomeComponent: OnInit');
    /*this.firstSubscription = interval(1000).subscribe({
      next: (count) => {
        console.log(count);
      },
      error: (error) => {},
    });*/

    const customObservable: Observable<number> = Observable.create(
      (observer) => {
        let count: number = 0;
        setInterval(() => {
          if (count === 3) observer.complete();
          observer.next(count++);
          if (count > 3) observer.error(new Error('Count greater than 3'));
        }, 1000);
      }
    );

    this.customObsSubscription = customObservable
      .pipe(
        filter((data: number) => data > 0),
        map((data: number) => 'Round: ' + data)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log('Observable completed')
      );
  }

  ngOnDestroy(): void {
    console.log('HomeComponent: OnDestroy');
    //this.firstSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
