import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  active: boolean;
  constructor(public route: ActivatedRoute,
              public recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
