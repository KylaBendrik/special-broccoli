const { Money } = require('../src/money.js')

class Franc extends Money{
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return new Franc(this.amount * multiplier);
  }
}

module.exports = {Franc};