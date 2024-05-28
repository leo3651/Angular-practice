import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  @Input() recipe: Recipe;
  id: number;
  isActive: boolean = false;

  ngOnInit() {
    console.log('OnInit');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isActive = this.router.url === `/recipes/${this.recipe.id}`;
      });
  }

  onRecipeSelected() {
    //this.recipeService.recipeSelected.emit(this.recipe);
    const id = this.recipe.id;
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }
}
