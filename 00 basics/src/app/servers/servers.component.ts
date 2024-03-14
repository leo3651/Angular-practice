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
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created with name ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
