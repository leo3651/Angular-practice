import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  even: boolean = false;
  @ViewChild('gameControl', { static: true }) gameControl;

  onStartedGame(event) {
    console.log(event);
  }

  ngOnInit() {
    console.log(this.gameControl);
    console.log(this.gameControl.value);
    if (this.gameControl.value % 2 === 0) this.even = true;
  }
}
