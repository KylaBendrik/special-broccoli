const test = require('ava');
const { Dollar } = require('../src/dollar.js')

test('test Dollar multiplication', t => {
  let five = new Dollar(5);

  t.deepEqual(new Dollar(10), five.times(2));
  t.deepEqual(new Dollar(15), five.times(3));
})

test('test Dollar equality', t => {
  let fiveA = new Dollar(5);
  let fiveB = new Dollar(5);
  let six = new Dollar(6);

  t.true(fiveA.equals(fiveB));
  t.false(fiveA.equals(six))
})

