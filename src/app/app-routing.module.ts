import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeDetailGuard} from "./recipes/recipe-detail.guard";
import {NoRecipeComponent} from "./recipes/recipe-detail/no-recipe.component";
import {RecipeNewComponent} from "./recipes/recipe-new/recipe-new.component";
import {NotFoundComponent} from "./not-found.component";


const routes: Routes = [
  {path: '', redirectTo: 'recipe', pathMatch: 'full'},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'recipe', canActivateChild: [RecipeDetailGuard], component: RecipesComponent, children: [
      {path: '', component: NoRecipeComponent},
      {path: 'new', component: RecipeNewComponent},
      {path: ':id', component: RecipeDetailComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
