class Franc {
  /**
   * This initializes a new Franc object
   * @param {number} input input any integer (later may be floats?)
   */
  constructor(input) {
    //private
    this.amount = input;
  }
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return new Franc(this.amount * multiplier);
  }
  /**
   * Two Franc Objects should be equal if they have the same value
   * @param {object} self 
   * @param {object} comparing 
   */
  equals(comparing){
    return this.amount === comparing.amount
  }
}

module.exports = {Franc};