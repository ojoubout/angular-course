import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      ingredients: new FormArray([])
    })
  }

  addIngredient() {
    this.ingredients.push(new Ingredient('w', 2));
  }

}
