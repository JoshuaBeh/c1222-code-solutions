/* exported Transaction */
function Transaction(type, amount) {
  if (typeof type === 'string') {
    this.type = type;
  }
  if (amount > 0) {
    this.amount = Math.floor(amount);
  }
}
