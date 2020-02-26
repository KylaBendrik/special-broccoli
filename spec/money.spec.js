const test = require('ava');
const { Money} = require('../src/money.js')


let oneDollar = Money.dollar(1);
let fiveDollars = Money.dollar(5);
let sixDollars = Money.dollar(6);
let oneFranc = Money.franc(1);
let fiveFrancs = Money.franc(5);

test ('test addition', t => {
  let sum = fiveDollars.plus(oneDollar)
  t.true(sum.equals(sixDollars))
})

test('test currency', t => {
  t.is("USD", oneDollar.currency())
  t.is("CHF", oneFranc.currency())
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
  t.is("USD", result.currency())
  t.true(Money.dollar(10).amount === 10)
  t.true(result.equals(fiveDollars.times(2)))
  t.true(result.equals(Money.dollar(10)))
})