const test = require('ava');
const { Money, Dollar, Franc } = require('../src/money.js')

test('test currency', t => {
  let oneDollar = Money.dollar(1);
  let oneFranc = Money.franc(1);
  t.deepEqual("USD", oneDollar.currency())
  t.deepEqual("CHF", oneFranc.currency())
})

test('test multi-currency equality', t => {
  let fiveDollars = Money.dollar(5);
  let alsoFiveDollars = Money.dollar(5);
  let sixDollars = Money.dollar(6);
  let fiveFrancs = Money.franc(5);
  let alsoFiveFrancs = Money.franc(5);

  t.true(fiveDollars.equals(alsoFiveDollars));
  t.true(fiveFrancs.equals(alsoFiveFrancs));
  t.false(fiveDollars.equals(sixDollars));
  t.false(fiveDollars.equals(fiveFrancs));
})

test('test multi-currency multiplication', t => {
  let fiveDollars = Money.dollar(5);
  
  t.deepEqual(Money.dollar(10), fiveDollars.times(2))
})