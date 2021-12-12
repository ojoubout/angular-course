import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {RecipesComponent} from "../recipes/recipes.component";


const routes: Routes = [
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'recipe', component: RecipesComponent},
  {path: '', redirectTo: 'recipe', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
