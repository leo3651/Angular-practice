import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './recipes-resolver.service';

const recipeRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: RecipesStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
