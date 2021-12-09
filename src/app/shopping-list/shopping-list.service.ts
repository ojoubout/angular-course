import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [];

  constructor() {}

  addIngredient(ingredient: Ingredient) {
    if (ingredient.name && ingredient.amount > 0) {
      this.ingredients.push(ingredient);
    }
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
