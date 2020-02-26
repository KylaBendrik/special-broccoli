const test = require('ava');
const { Money} = require('../src/money.js')


let oneDollar = Money.dollar(1);
let twoDollars = Money.dollar(2);
let threeDollars = Money.dollar(3);
let fiveDollars = Money.dollar(5);
let sixDollars = Money.dollar(6);
let oneFranc = Money.franc(1);
let twoFrancs = Money.franc(2);
let fiveFrancs = Money.franc(5);
let sixFrancs = Money.franc(6);

test ('test dollar addition', t => {
  let sum = fiveDollars.plus(oneDollar)
  t.true(sum.equals(sixDollars))
})

// test ('test complex addition', t => {
//   let sum = oneDollar.plus(twoFrancs)
//   t.true(sum.equals(twoDollars))
// })

test ('test exchange rates -> USD = USD', t=> {
  t.true(oneDollar.exchange('USD').equals(Money.dollar(1)))
})
test ('test exchange rates -> 1 USD = 2 CHF', t=> {
  t.true(oneDollar.exchange('CHF').equals(twoFrancs))
})
test ('test exchange rates -> 6 CHF = 3 USD', t=> {
  t.true(sixFrancs.exchange("USD").equals(threeDollars))
})

test('test currency', t => {
  t.is("USD", oneDollar.currency)
  t.is("CHF", oneFranc.currency)
})

test('stringify', t => {
  t.is("1 USD", oneDollar.toString())
})

test('test multi-currency equality', t => {
  let alsoFiveDollars = Money.dollar(5);
  let alsoFiveFrancs = Money.franc(5);

  t.true(fiveDollars.equals(alsoFiveDollars));
  t.true(fiveFrancs.equals(alsoFiveFrancs));
  t.false(fiveDollars.equals(sixDollars));
  t.false(fiveDollars.equals(fiveFrancs));
})

test('test multi-currency multiplication', t => {
  let fiveDollars = Money.dollar(5);
  let result = fiveDollars.times(2)

  t.true(result.amount === 10)
  t.is("USD", result.currency)
  t.true(Money.dollar(10).amount === 10)
  t.true(result.equals(fiveDollars.times(2)))
  t.true(result.equals(Money.dollar(10)))
})