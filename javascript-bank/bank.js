/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance !== 'string' && !isNaN(balance) && Math.floor(balance) === balance) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var accounts = this.accounts;
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].number === number) {
      return accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var accounts = this.accounts;
  var total = 0;
  if (accounts.length === 0) {
    return 0;
  }
  for (var i = 0; i < accounts.length; i++) {
    var transactions = accounts[i].transactions;
    for (var j = 0; j < transactions.length; j++) {
      if (transactions[j].type === 'deposit') {
        total = total + transactions[j].amount;
      } else {
        total = total - transactions[j].amount;
      }
    }
  }
  return total;
};
