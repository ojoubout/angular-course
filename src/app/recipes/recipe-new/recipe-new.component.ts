import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ValidatorService} from "../../shared/validator.service";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../../shared/recipe.model";

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  public ingredientsArr: Ingredient[] = [];
  public form: FormGroup;

  constructor(public validatorService: ValidatorService, public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      imageUrl: new FormControl(),
      ingredient: new FormGroup({
        name: new FormControl(),
        amount: new FormControl(1)
      }),
      ingredients: new FormArray([])
    })

    this.ingredient.get('amount').valueChanges.subscribe(()=>{this.validatorService.checkMaxAmount(this.ingredient.get('amount'))});
  }

  get name() {
    return this.form.value.name;
  }

  get description() {
    return this.form.value.amount;
  }

  get imageUrl() {
    return this.form.value.imageUrl;
  }

  get ingredient() {
    return this.form.get('ingredient') as FormGroup;
  }

  get ingredientName() {
    return this.ingredient.value.name;
  }

  get ingredientAmount() {
    return this.ingredient.value.amount;
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    let ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);

    this.ingredientsArr.push(ingredient);
    this.ingredients.push(new FormControl(ingredient));
    this.ingredient.reset({amount: 1});

  }

  onSubmit() {
    console.log(this.ingredients);
    this.recipeService.addRecipe(new Recipe(this.name, this.description, this.imageUrl, this.ingredients.value))
    this.form.reset({amount: 1});
    this.ingredientsArr = []

  }

  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
    this.ingredientsArr.splice(index, 1);
  }
}
