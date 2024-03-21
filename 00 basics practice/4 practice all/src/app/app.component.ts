import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username = '';

  servers = [
    {
      type: 'Server',
      name: 'Test server',
      status: Math.random() > 0.5 ? 'online' : 'offline',
      id: Math.trunc(Math.random() * 1000000),
    },
  ];

  onServerAdded(serverData) {
    this.servers.push({
      type: serverData.type,
      name: serverData.name,
      status: Math.random() > 0.5 ? 'online' : 'offline',
      id: Math.trunc(Math.random() * 1000000),
    });
  }

  onInputChange(e) {
    console.log(e);
    this.username = e.target.value;
  }

  onUpdateUsername() {
    this.username = '';
  }
}
