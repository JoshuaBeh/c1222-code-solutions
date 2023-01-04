/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);
  if (amount <= 0 || typeof amount === 'string' || isNaN(amount) || Math.floor(amount) !== amount) {
    return false;

  } else {
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawal', amount);
  if (amount <= 0 || typeof amount === 'string' || isNaN(amount) || Math.floor(amount) !== amount) {
    return false;

  } else {
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  var transaction = this.transactions;
  for (var i = 0; i < transaction.length; i++) {
    if (transaction[i].type === 'deposit') {
      balance = balance + transaction[i].amount;
    } else {
      balance = balance - transaction[i].amount;
    }
  }
  return balance;
};
