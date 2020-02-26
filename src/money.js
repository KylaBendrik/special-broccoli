class Money {
  /**
   * This initializes a new Money object
   * @param {number} input input any integer (later may be floats?)
   */
  constructor(amount, currency_type){
    this.amount = amount;
    this.currency_type = currency_type;
  }
  /**
   * Two Money objects should be equal if they have the same value
   * @param {object} self 
   * @param {object} comparing 
   */
  equals(comparing){
    return this.amount === comparing.amount 
      && this.currency() === comparing.currency();
  };
  plus(addend){
    return new Money(this.amount + addend.amount, this.currency_type)
  }
  currency(){
    return this.currency_type
  };
  toString(){
    return this.amount + " " + this.currency()
  }
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return new Money(this.amount * multiplier, this.currency_type);
  }
  static dollar(amount){
    return new Money(amount, "USD")
  };
  static franc(amount){
    return new Money(amount, "CHF")
  };
}


module.exports = {Money};