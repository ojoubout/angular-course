import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(public recipeService: RecipeService,
              public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
  }

}
