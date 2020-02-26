class Money {
  /**
   * This initializes a new Money object
   * @param {number} input input any integer (later may be floats?)
   */
  constructor(amount, currency){
    this.amount = amount;
    this.currency = currency;
  }
  /**
   * Two Money objects should be equal if they have the same value
   * @param {object} self 
   * @param {object} comparing 
   */
  equals(comparing){
    return this.amount === comparing.amount 
      && this.currency === comparing.currency;
  };
  plus(addend){
    return new Money(this.amount + addend.amount, this.currency)
  }
  toString(){
    return this.amount + " " + this.currency
  }
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return new Money(this.amount * multiplier, this.currency);
  }
  static dollar(amount){
    return new Money(amount, "USD")
  };
  static franc(amount){
    return new Money(amount, "CHF")
  };
}


module.exports = {Money};