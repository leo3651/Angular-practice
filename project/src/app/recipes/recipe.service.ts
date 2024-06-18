import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected: Subject<Recipe> = new Subject<Recipe>();

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
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
