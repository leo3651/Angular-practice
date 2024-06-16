import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  editingItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('form') formElement: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        console.log(index);
        this.editMode = true;
        this.editingItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);

        this.formElement.setValue({
          ingredientName: this.editedItem.name,
          ingredientAmount: this.editedItem.amount,
        });
      }
    );
  }

  onIngredientAdd(form: NgForm) {
    console.log(form);

    const formValue = form.value;
    const ingName = formValue.ingredientName;
    const ingAmount = +formValue.ingredientAmount;

    if (!ingName || !ingAmount) return;

    const newIngredient = new Ingredient(ingName, ingAmount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editingItemIndex,
        newIngredient
      );
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.formElement.reset();
  }

  clearForm() {
    this.formElement.reset();
    this.editMode = false;
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
    this.clearForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
