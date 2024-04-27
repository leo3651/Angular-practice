import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  showDetails = false;
  logClicks = [];

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
