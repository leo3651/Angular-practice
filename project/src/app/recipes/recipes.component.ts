import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipeDetail: Recipe;
  showRecipe: boolean = false;
  //recipeSelectedSubs: Subscription;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /*this.recipeSelectedSubs = this.recipeService.recipeSelected.subscribe((recipe) => {
      this.recipeDetail = recipe;
      this.showRecipe = true;
    });*/
  }

  ngOnDestroy(): void {
    //this.recipeSelectedSubs.unsubscribe()
  }
}
