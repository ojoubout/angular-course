import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "./app-routing.module";
import {NoRecipeComponent} from "./recipes/recipe-detail/no-recipe.component";
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import {NotFoundComponent} from "./not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListItemComponent,
    NoRecipeComponent,
    RecipeNewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbTooltipModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
