import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {ValidatorService} from "../../shared/validator.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  // @ViewChild("nameInput") nameInput: ElementRef;
  // @ViewChild("amountInput") amountInput: ElementRef;
  @ViewChild('f') form: NgForm;

  constructor(public shoppingListService:ShoppingListService, public validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  get name() {
    return this.form?.controls?.name;
  }

  get amount() {
    return this.form?.controls?.amount;
  }

  addIngredient() {
    let name = this.name.value;
    let amount = this.amount.value;
      // console.log(this.form);
    try {
      this.shoppingListService.addIngredient(new Ingredient(name, amount));
    } catch (e) {
    } finally {
      this.form.reset({amount: 1});
      // this.nameInput.nativeElement.value = "";
      // this.amountInput.nativeElement.value = "1";
    }
  }

  checkMaxAmount() {
    if (this.amount.value < 1) {
      this.amount.setValue(1);
    } else if (this.amount.value > 9999) {
      this.amount.setValue(9999);
    }
  }


}
