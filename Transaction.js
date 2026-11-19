export class Transaction {
  constructor(amount, description, isCompleted) {
    this._amount = amount;
    this._description = description;
    this._isCompleted = isCompleted;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get isCompleted() {
    return this._isCompleted;
  }

  set isCompleted(value) {
    this._isCompleted = value;
  }

  show() {
    console.log("Сумма:", this._amount);
    console.log("Описание:", this._description);
    console.log("Выполнена:", this._isCompleted);
  }

  delete() {
    for (const key in this) {
      delete this[key];
    }
  }

  copy() {
    return this;
  }

  #complete() {
    this._isCompleted = true;
  }

  finish() {
    this.#complete();
  }

  static clone(transaction) {
    return new Transaction(
      transaction.amount,
      transaction.description,
      transaction.isCompleted
    );
  }
}