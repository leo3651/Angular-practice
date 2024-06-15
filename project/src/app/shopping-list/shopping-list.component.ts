import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[];
  ingredientsChangedSubs: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredientsList;
    this.ingredientsChangedSubs =
      this.shoppingListService.ingredientsChanged.subscribe(
        (updatedIngredientsList) => {
          this.ingredients = updatedIngredientsList;
        }
      );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubs.unsubscribe();
  }
}
