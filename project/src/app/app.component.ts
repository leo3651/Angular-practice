import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'courseProject';
  selectedFeature: string = 'recipes';

  navigateTo(selectedFeature: string) {
    console.log(selectedFeature);
    this.selectedFeature = selectedFeature;
  }
}
