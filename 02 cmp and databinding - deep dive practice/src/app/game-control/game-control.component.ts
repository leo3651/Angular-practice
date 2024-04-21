import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  value: number = 1;
  game;
  @Output() startedGame = new EventEmitter<number>();

  gameInterval() {
    this.startedGame.emit(this.value);
    this.value++;
  }

  onStartGame() {
    this.game = setInterval(this.gameInterval.bind(this), 1000);
    this.gameInterval();
  }

  onStopGame() {
    clearInterval(this.game);
  }
}
