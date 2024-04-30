export class CounterService {
  private activeToInactiveCounter = 0;
  private inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to inactive counter: ', this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active counter: ', this.inactiveToActiveCounter);
  }
}
