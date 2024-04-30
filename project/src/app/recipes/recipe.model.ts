import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  listOfIngredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    listOfIngredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.listOfIngredients = listOfIngredients;
  }
}
