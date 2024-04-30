import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild('inputIngredientName') inputIngredientName: ElementRef;
  @ViewChild('inputIngredientAmount') inputIngredientAmount: ElementRef;

  onIngredientAdd() {
    console.log(this.inputIngredientName.nativeElement.value);
    console.log(this.inputIngredientAmount.nativeElement.value);

    const ingName = this.inputIngredientName.nativeElement.value;
    const ingAmount = Number.parseFloat(
      this.inputIngredientAmount.nativeElement.value
    );

    if (!ingName || !ingAmount) return;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
