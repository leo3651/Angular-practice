import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-11/02_iStock-619087354-_1_0.jpg'
    ),
    new Recipe(
      'Test',
      'This is a test',
      'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-11/02_iStock-619087354-_1_0.jpg'
    ),
  ];

  constructor() {}
}
