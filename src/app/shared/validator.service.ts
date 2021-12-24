import { Injectable } from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  isValid(elem: AbstractControl) {
    if (elem?.touched) {
      if (elem.valid)
        return 'is-valid';
      else if (elem.invalid)
        return 'is-invalid';
    }
  }

  checkMaxAmount(amount: AbstractControl) {
    if (amount.value < 1) {
      amount.setValue(1);
    } else if (amount.value > 9999) {
      amount.setValue(9999);
    }
  }

}
