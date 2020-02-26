const rates = {
  "USD": {
    "CHF": 2
  },
  "CHF": {
    "USD": 0.5
  }
}

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
  /**
   * Add together two currencies
   * @param {number} addend 
   */
  plus(addend){
    return new Money(this.amount + addend.amount, this.currency)
  }
  /**
   * This takes one kind of Money and returns the equivalent Money in another kind of currency
   * @param {string} to the kind of currency you'd like to get (USD or CHF)
   */
  exchange(to){
    let result = this
    if(this.currency != to){
      result =  new Money(rates[this.currency][to] * this.amount, to)
    }
    return result
  }
  /**
   * Nicely format the amount (10 USD, 15 CHF, etc)
   */
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