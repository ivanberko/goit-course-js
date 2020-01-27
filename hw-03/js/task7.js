'use strict';

console.log('TASK7------------------------');

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = Transaction;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы transactionс баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, WITHDRAW);
    this.transactions.push(transaction);
    return amount <= this.balance
      ? (this.balance -= amount)
      : `Cнятие ${amount} не возможно, недостаточно средств`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) return item;
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let amountTotal = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        amountTotal += item.amount;
      }
    }
    return amountTotal;
  },
};

account.deposit(3000);
console.log(account.transactions);
console.log(account.getBalance());

account.withdraw(1500);
console.log(account.transactions);
console.log(account.getBalance());

console.log(account.getTransactionTotal(DEPOSIT));

// account.transactions[0].id = 'id-01';

// console.log(account.getTransactionDetails('id-01'));
