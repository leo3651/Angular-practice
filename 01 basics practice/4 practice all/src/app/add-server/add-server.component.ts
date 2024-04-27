import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrl: './add-server.component.css',
})
export class AddServerComponent {
  @Output() serverAdded = new EventEmitter();
  name = '';

  onServerAdd() {
    this.serverAdded.emit({ type: 'Server', name: this.name });
    this.name = '';
  }

  onBlueprintAdd() {
    this.serverAdded.emit({ type: 'Blueprint', name: this.name });
    this.name = '';
  }
}
