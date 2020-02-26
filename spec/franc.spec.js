const test = require('ava');
const { Franc } = require('../src/franc.js')

test('test Franc multiplication', t => {
  let five = new Franc(5);
  
  t.deepEqual(new Franc(10), five.times(2));
  t.deepEqual(new Franc(15), five.times(3));
})

test('test Franc equality', t => {
  let fiveA = new Franc(5);
  let fiveB = new Franc(5);
  let six = new Franc(6);

  t.true(fiveA.equals(fiveB));
  t.false(fiveA.equals(six))
})