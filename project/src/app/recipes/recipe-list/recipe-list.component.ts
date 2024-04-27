import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected: EventEmitter<Recipe> =
    new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test 1',
      'This is a test 1',
      'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-11/02_iStock-619087354-_1_0.jpg'
    ),
    new Recipe(
      'Test 2',
      'This is a test 2',
      'https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY'
    ),
  ];

  constructor() {}

  onRecipeSelected(event: Recipe) {
    console.log(event);
    this.recipeWasSelected.emit(event);
  }
}
