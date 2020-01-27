'use strict';

console.log('TASK7------------------------');

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = Transaction;

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: this.transactions.length + 1,
    };
    return transaction;
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    const transaction = this.createTransaction(amount, WITHDRAW);
    this.transactions.push(transaction);
    return amount <= this.balance
      ? (this.balance -= amount)
      : `Cнятие ${amount} не возможно, недостаточно средств`;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) return item;
    }
  },

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

console.log(account.withdraw(50000));
console.log(account.transactions);
console.log(account.getBalance());

console.log(account.getTransactionTotal(DEPOSIT));

console.log(account.getTransactionDetails(1));
