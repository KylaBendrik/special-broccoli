const { Money } = require('../src/money.js')

class Dollar extends Money {
  
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return new Dollar(this.amount * multiplier);
  }
}

module.exports = {Dollar};