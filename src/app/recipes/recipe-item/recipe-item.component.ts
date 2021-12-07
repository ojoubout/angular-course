import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() onRecipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  //
  // public set recipe(recipe: Recipe) {
  //   this.recipe = recipe;
  // }

}
