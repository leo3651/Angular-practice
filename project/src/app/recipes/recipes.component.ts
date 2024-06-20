import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
