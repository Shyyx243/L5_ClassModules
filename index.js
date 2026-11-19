import { CardTransaction } from "./CardTransaction.js";

const transactions = [
  new CardTransaction(250, "Оплата продуктов", true, "1234 5678 9012 3456"),
  new CardTransaction(1200, "Покупка ноутбука", false, "9876 5432 1098 7654"),
];

transactions.forEach((t) => t.show());
