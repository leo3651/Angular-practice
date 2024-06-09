import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;
  hobby: string = '';
  forbiddenUsernames: string[] = ['Leon', 'Jon'];

  ngOnInit(): void {
    this.form = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  submitForm() {
    console.log(this.form);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('hobbies')).push(control);
  }

  get hobbiesControls() {
    console.log((<FormArray>this.form.get('hobbies')).controls);
    return (<FormArray>this.form.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1)
      return { forbiddenName: true };
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com')
          resolve({ forbiddenMail: true });
        resolve(null);
      }, 2500);
    });
  }
}
