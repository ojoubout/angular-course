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

}
