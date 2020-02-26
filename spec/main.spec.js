const test = require('ava');
const { Dollar } = require('../src/main.js')

test('test multiplication', t => {
  let five = new Dollar(5);
  five.times(2);

  t.is(10, five.amount);
})