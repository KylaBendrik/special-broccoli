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
      && this.constructor.name === comparing.constructor.name;
  };
  currency(){
    return this.currency
  };
  static dollar(amount){
    return new Dollar(amount, "USD")
  };
  static franc(amount){
    return new Franc(amount, "CHF")
  };
}

class Dollar extends Money {
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return Money.dollar(this.amount * multiplier);
  }
}

class Franc extends Money{
  /**
   * multiply an amount (price per share) by a number (number of shares) and receive an amount
   * @param {number} multiplier number of shares
   */
  times(multiplier){
    return Money.franc(this.amount * multiplier);
  }
}

module.exports = {Money, Franc, Dollar};