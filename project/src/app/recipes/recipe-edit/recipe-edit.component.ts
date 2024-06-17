import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

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
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params['id'] !== null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImgPath: string = '';
    let recipeDescription: string = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImgPath),
      description: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
