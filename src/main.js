class Dollar {
  /**
   * This initializes a new Dollar object
   * @param {number} input input any integer (later may be floats?)
   */
  constructor(input) {
    this.amount = input;
  }
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return new Dollar(this.amount * multiplier);
  }
}

module.exports = {Dollar};