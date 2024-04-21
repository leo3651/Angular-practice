import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  events: number[] = [];

  @ViewChild('gameControl', { static: true }) gameControl;

  onStartedGame(event) {
    this.events.push(this.gameControl.value);
  }

  ngOnInit() {
    console.log(this.gameControl);
    console.log(this.gameControl.value);
  }
}
