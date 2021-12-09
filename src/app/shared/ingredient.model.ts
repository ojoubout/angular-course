export class Ingredient {
  private _name: string;
  private _amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  set name(value: string) {
    if (value) {
      this._name = value;
    } else {
      throw Error('Invalid name');
    }
  }

  set amount(value: number) {
    if (value > 0) {
      this._amount = value;
    } else {
      throw Error('Invalid amount');
    }
  }

  get name() { return this._name; }
  get amount() { return this._amount; }

}
