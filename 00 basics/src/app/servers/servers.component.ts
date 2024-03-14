import { Component } from '@angular/core';

@Component({
  selector: '.app-servers', // by class
  // selector: 'app-servers', // by element
  // selector: '[app-servers]', // by attribute
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>', // inline template
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
