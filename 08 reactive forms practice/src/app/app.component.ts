import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  submitForm() {
    console.log(this.form);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.forbiddenProjectNames,
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      dropdown: new FormControl('critical', [], this.asyncDropdownCheck),
    });

    this.form
      .get('dropdown')
      .statusChanges.subscribe((status) => console.log(status));
    this.form
      .get('dropdown')
      .valueChanges.subscribe((value) => console.log(value));
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') return { forbiddenProjectName: true };
    return null;
  }

  asyncDropdownCheck(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'stable') resolve({ forbiddenOption: true });
        resolve(null);
      }, 2000);
    });
    return null;
  }
}
