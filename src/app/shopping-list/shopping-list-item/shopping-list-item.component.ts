import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Input() isEdit: boolean = false;

  @Output() onDeleteIngredient = new EventEmitter<void>();
  @Output() onEditIngredient = new EventEmitter<Ingredient>();

  @ViewChild('editNameInput') editNameInput: ElementRef;
  @ViewChild('editAmountInput') editAmountInput: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  editIngredient() {
    this.onEditIngredient.emit(this.ingredient);
  }
  saveEdit() {
    this.ingredient.name = this.editNameInput.nativeElement.value;
    this.ingredient.amount = this.editAmountInput.nativeElement.valueAsNumber;
    this.onEditIngredient.emit(null);
  }

  cancelEdit() {
    this.onEditIngredient.emit(null);
  }
}
