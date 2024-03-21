import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = '';

  onInputChange(e) {
    console.log(e);
    this.username = e.target.value;
  }
}
