import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
