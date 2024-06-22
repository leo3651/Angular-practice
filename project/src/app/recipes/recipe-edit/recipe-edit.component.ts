import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImgPath: string = '';
    let recipeDescription: string = '';
    let recipeIngredientsArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.listOfIngredients)
        recipe.listOfIngredients.forEach((ingredient) => {
          recipeIngredientsArray.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImgPath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      recipeIngredientsArray: recipeIngredientsArray,
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
    const id = this.editMode
      ? this.id
      : this.recipeService.getRecipes().length + 1;
    const name = this.recipeForm.value.name;
    const imagePath = this.recipeForm.value.imagePath;
    const description = this.recipeForm.value.description;
    const ingredients = this.recipeForm.value.recipeIngredientsArray;

    const recipe = new Recipe(id, name, description, imagePath, ingredients);

    if (this.editMode) {
      this.recipeService.updateRecipe(id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }

    this.onCancelRecipe();
  }

  onAddIngredient() {
    (this.recipeForm.get('recipeIngredientsArray') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[1-9]+[0-9]*$'),
        ]),
      })
    );
  }

  get ingredientsArray() {
    return (this.recipeForm.get('recipeIngredientsArray') as FormArray)
      .controls;
  }

  onCancelRecipe() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('recipeIngredientsArray') as FormArray).removeAt(
      index
    );
  }
}
