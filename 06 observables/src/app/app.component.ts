import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activated: boolean = false;
  subjectSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    /*this.userService.activatedEmitter.subscribe((avtivateIt: boolean) => {
      this.activated = avtivateIt;
    });*/

    this.subjectSubscription = this.userService.subject.subscribe(
      (activateIt) => {
        this.activated = activateIt;
      }
    );
  }

  ngOnDestroy(): void {
    this.subjectSubscription.unsubscribe();
  }
}
