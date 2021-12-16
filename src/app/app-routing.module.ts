import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeDetailGuard} from "./recipes/recipe-detail.guard";


const routes: Routes = [
  {path: '', redirectTo: 'recipe', pathMatch: 'full'},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'recipe', canActivateChild: [RecipeDetailGuard], component: RecipesComponent, children: [
      {path: ':id', component: RecipeDetailComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
