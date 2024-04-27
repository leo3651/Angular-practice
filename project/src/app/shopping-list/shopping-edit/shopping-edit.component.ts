import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('inputIngredientName') inputIngredientName: ElementRef;
  @ViewChild('inputIngredientAmount') inputIngredientAmount: ElementRef;

  @Output() IngredientAdded: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();

  onIngredientAdd() {
    console.log(this.inputIngredientName.nativeElement.value);
    console.log(this.inputIngredientAmount.nativeElement.value);

    const ingName = this.inputIngredientName.nativeElement.value;
    const ingAmount = Number.parseFloat(
      this.inputIngredientAmount.nativeElement.value
    );

    if (!ingName || !ingAmount) return;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.IngredientAdded.emit(newIngredient);
  }
}
