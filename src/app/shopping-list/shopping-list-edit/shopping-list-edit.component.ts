import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addIngredientEvent() {

    let name = this.nameInput.nativeElement.value;
    let amount = this.amountInput.nativeElement.valueAsNumber;
    if (name && amount > 0) {
      this.onAddIngredient.emit(new Ingredient(name, amount));
      this.nameInput.nativeElement.value = "";
      this.amountInput.nativeElement.value = "";
    }
  }

}
