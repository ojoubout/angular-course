import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import * as lodash from "lodash";
import {Recipe} from "../../shared/recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() public selectedRecipe: Recipe;

  constructor(public route: ActivatedRoute,
              public router: Router,
              public recipeService: RecipeService,
              public shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.selectedRecipe = this.recipeService.recipes[param.id];
    });
  }

  addToShoppingList() {
    this.shoppingListService.ingredients.push(...(lodash.cloneDeep(this.selectedRecipe.ingredients)));
  }
}
