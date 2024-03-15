import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: 'directives.component.css',
})
export class Directives {
  showParagraph = true;
  buttonClicks = [];

  onUpdateParagraph() {
    this.showParagraph = !this.showParagraph;

    this.buttonClicks.push(
      new Intl.DateTimeFormat('hr-HR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }).format(new Date())
    );
    console.log(this.buttonClicks);
  }
}
