import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') formElement: HTMLFormElement;
  @ViewChild('email') emailInputElement: HTMLFormElement;

  defaultQuestion: string = 'pet';
  answer: string = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(event: NgForm) {
    console.log('Form element: ', this.formElement);
    console.log('Form element, native element', this.formElement.nativeElement);
    console.log('Email input element: ', this.emailInputElement);
    console.log('Event on submit: ', event);
    console.log('Submitted');
  }
}
