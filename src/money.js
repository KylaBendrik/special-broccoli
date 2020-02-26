class Money {
  /**
   * This initializes a new Money object
   * @param {number} input input any integer (later may be floats?)
   */
  constructor(input){
    this.amount = input;
  }
  /**
   * Two Money objects should be equal if they have the same value
   * @param {object} self 
   * @param {object} comparing 
   */
  equals(comparing){
    return this.amount === comparing.amount
  }
}

module.exports = {Money};