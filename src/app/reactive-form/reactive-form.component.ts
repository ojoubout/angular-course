import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public projectForm: FormGroup;
  public statuses: string[] = ['Stable', 'Critical', 'Finished'];
  public forbiddenNames: string[] = ['Test'];
  private isSubmitted = false;
  constructor() {
  }
  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, Validators.minLength(3), this.forbiddenValidator.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], this.emailAlreadyExists),
      status: new FormControl(this.statuses[0])
    });
  }

  get projectName() {
    return this.projectForm.get('projectName');
  }

  get email() {
    return this.projectForm.get('email');
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.projectForm);
  }

  forbiddenValidator(formControl: FormControl) {
    if (this.forbiddenNames.indexOf(formControl.value) != -1) {
      return {forbiddenName: true};
    }
    return null;
  }

  emailAlreadyExists(formControl: FormControl) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (formControl.value == 'a@b') {
          resolve({emailExists: true});
        } else {
          resolve(null);
        }
      }, 2000)
    });
  }

  isValid(elem: AbstractControl) {
    if (elem.touched || this.isSubmitted) {
      if (elem.valid)
        return 'is-valid';
      else
        return 'is-invalid';
    }
  }
}
