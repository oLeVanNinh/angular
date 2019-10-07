import { FormControl, FormGroup, Validators } from "@angular/forms";

export class UserFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }
}

export class UserFormGroup extends FormGroup {
  constructor() {
    super({
      username: new UserFormControl("Name", "name", "", Validators.compose([Validators.required, Validators.minLength(6)])),
      password: new UserFormControl("Password", "password", "", Validators.compose([Validators.minLength(6), Validators.required]))
    })
  }

  get userControls(): UserFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as UserFormControl);
  }
}
