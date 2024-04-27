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
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created with name ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
