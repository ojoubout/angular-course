import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This simply a test', 'https://media.discordapp.net/attachments/897505567642386483/910855883964178483/IMG-20211118-WA0013.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
