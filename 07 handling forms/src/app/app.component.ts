import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') formElement: HTMLFormElement;
  @ViewChild('email') emailInputElement: HTMLFormElement;
  @ViewChild('userData') userData: NgModelGroup;

  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(event: NgForm) {
    console.log('Form element: ', this.formElement);
    console.log('Form element, native element', this.formElement.nativeElement);
    console.log('Email input element: ', this.emailInputElement);
    console.log('Event on submit: ', event);
    console.log('userData: ', this.userData);
    console.log('Submitted');
  }
}
