import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  constructor(private recipeService: RecipeService) {}

  @Input() recipeDetail: Recipe;

  onAddToShoppingList() {
    this.recipeService.onAddIngredients(this.recipeDetail.listOfIngredients);
  }
}
