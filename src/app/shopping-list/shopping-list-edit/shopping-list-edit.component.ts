import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  constructor(public shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.valueAsNumber;
    try {
      this.shoppingListService.addIngredient(new Ingredient(name, amount));
    } finally {
      this.nameInput.nativeElement.value = "";
      this.amountInput.nativeElement.value = "1";
    }
  }

}
