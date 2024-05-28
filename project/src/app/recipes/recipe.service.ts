import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Test 1',
      'This is a test 1',
      'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-11/02_iStock-619087354-_1_0.jpg',
      [new Ingredient('apple', 4)]
    ),
    new Recipe(
      2,
      'Test 2',
      'This is a test 2',
      'https://th.bing.com/th/id/OIG4.Xq74jSVEkEaVe2hD2RUY',
      [new Ingredient('bananna', 4), new Ingredient('cherry', 4)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  onAddIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
