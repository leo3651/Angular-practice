import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activatedRoute);

    const id: number = this.activatedRoute.snapshot.params.id;
    const name: string = this.activatedRoute.snapshot.params.name;
    this.user = { id, name };

    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log('Params:');
        this.user.id = params.id;
        this.user.name = params.name;
        console.log(params);
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe(); // angular does it automatically
  }
}
