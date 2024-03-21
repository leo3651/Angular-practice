import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = '';
  showDetails = false;
  logClicks = [];

  onInputChange(e) {
    console.log(e);
    this.username = e.target.value;
  }

  onUpdateUsername() {
    this.username = '';
  }

  onUpdateShowDetails() {
    this.showDetails = !this.showDetails;
    this.logClicks.push(
      new Intl.DateTimeFormat('hr-HR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        minute: 'numeric',
        hour: 'numeric',
        second: 'numeric',
      }).format(new Date())
    );
  }

  getColor(index) {
    console.log('NEW');
    console.log(index >= 4, index);
    return index >= 4 ? 'lightgreen' : 'transparent';
  }
}
