import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // first trigger
    trigger('divState', [
      state(
        'normal',
        style({ 'background-color': 'red', transform: 'translateX(0);' })
      ),
      state(
        'highlighted',
        style({ 'background-color': 'blue', transform: 'translateX(100px)' })
      ),
      transition('normal <=> highlighted', animate(300)),
    ]),

    // second trigger
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)',
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
        }),
        animate(
          500,
          style({
            borderRadius: '50px',
          })
        ),
        animate(500),
      ]),
    ]),

    // third trigger
    trigger('list1', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0, transform: 'translateX(100px)' })),
      ]),
    ]),

    // fourth trigger
    trigger('list2', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateX(-50px)',
              offset: 0.3,
            }),
            style({ opacity: 1, transform: 'translateX(-20px)', offset: 1 }),
          ])
        ),
      ]),
      transition('* => void', [
        group([
          animate(300, style({ color: 'red' })),
          animate(800, style({ opacity: 0, transform: 'translateX(100px)' })),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list = [item, ...this.list];
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event) {
    console.log(event);
  }

  animationDone(event) {
    console.log(event);
  }
}
