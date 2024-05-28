import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  listOfIngredients: Ingredient[];

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    listOfIngredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.listOfIngredients = listOfIngredients;
  }
}
