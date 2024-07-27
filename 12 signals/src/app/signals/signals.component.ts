import { NgFor } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log("Counter: ", this.counter()));
  }

  increment() {
    this.counter.update((oldValue) => ++oldValue);
    //this.counter.set(this.counter() + 1);

    this.actions.mutate((oldActions) => oldActions.push("INCREMENT"));
  }

  decrement() {
    this.counter.update((oldValue) => --oldValue);

    this.actions.update((oldActions) => [...oldActions, "DECREMENT"]);
  }
}
