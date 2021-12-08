import { Injectable } from '@angular/core';
import {Recipe} from "../shared/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This simply a test 1', 'https://media.discordapp.net/attachments/897505567642386483/910855883964178483/IMG-20211118-WA0013.jpg'),
    new Recipe('A Test Recipe 2', 'This simply a test 2', 'https://media.discordapp.net/attachments/897505567642386483/910855883964178483/IMG-20211118-WA0013.jpg')
  ];
  selectedRecipe: Recipe;
  constructor() {}
}
