import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import * as lodash from "lodash";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(public recipeService: RecipeService, public shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.shoppingListService.ingredients.push(...(lodash.cloneDeep(this.recipeService.selectedRecipe.ingredients)));
  }
}
