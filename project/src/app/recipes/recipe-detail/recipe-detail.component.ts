import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  recipeDetail: Recipe;
  recipeId: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeDetail = this.recipeService.getRecipe(+params['id']);
      this.recipeId = +params.id;
    });
  }

  onAddToShoppingList() {
    this.recipeService.onAddIngredients(this.recipeDetail.listOfIngredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
}
