import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') formElement: NgForm;
  @ViewChild('email') emailInputElement: HTMLFormElement;
  @ViewChild('userData') userData: NgModelGroup;

  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // overrides all form
    /*this.formElement.setValue({
      userData: { username: 'Leo', email: 'lkov@gmail.com' },
      dropdown: { secret: 'pet' },
      answer: '',
      gender: 'male',
    });*/

    // overrides specific property
    this.formElement.form.patchValue({ userData: { username: 'Leo' } });
  }

  onSubmit(event: NgForm) {
    console.log('Form element: ', this.formElement);
    //console.log('Form element, native element', this.formElement.nativeElement);
    console.log('Email input element: ', this.emailInputElement);
    console.log('Event on submit: ', event);
    console.log('userData: ', this.userData);
    console.log('Submitted');

    this.submitted = true;
    this.user.username = this.formElement.value.userData.username;
    this.user.email = this.formElement.value.userData.email;
    this.user.secretQuestion = this.formElement.value.dropdown.secret;
    this.user.answer = this.formElement.value.answer;
    this.user.gender = this.formElement.value.gender;

    this.formElement.reset();
  }
}
