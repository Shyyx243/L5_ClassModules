import { Transaction } from "./Transaction.js";

export class CardTransaction extends Transaction {
  constructor(amount, description, isCompleted, cardNumber) {
    super(amount, description, isCompleted);
    this._cardNumber = cardNumber;
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set cardNumber(value) {
    this._cardNumber = value;
  }

  show() {
    super.show();
    console.log("Номер карты:", this._cardNumber);
  }

  delete() {
    super.delete();
  }

  copy() {
    return this;
  }

  static clone(transaction) {
    return new CardTransaction(
      transaction.amount,
      transaction.description,
      transaction.isCompleted,
      transaction.cardNumber
    );
  }
}