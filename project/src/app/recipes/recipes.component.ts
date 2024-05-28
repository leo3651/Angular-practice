import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  recipeDetail: Recipe;
  showRecipe: boolean = false;

  ngOnInit(): void {
    /*this.recipeService.recipeSelected.subscribe((recipe) => {
      this.recipeDetail = recipe;
      this.showRecipe = true;
    });*/
  }
}
