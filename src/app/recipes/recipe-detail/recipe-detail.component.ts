import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import * as lodash from "lodash";
import {Recipe} from "../../shared/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() public selectedRecipe: Recipe;

  constructor(public recipeService: RecipeService, public shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.shoppingListService.ingredients.push(...(lodash.cloneDeep(this.selectedRecipe.ingredients)));
  }
}
