import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredientsList;
    this.shoppingListService.ingredientsChanged.subscribe(
      (updatedIngredientsList) => {
        this.ingredients = updatedIngredientsList;
      }
    );
  }
}
