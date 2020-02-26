const test = require('ava');
const { Dollar } = require('../src/main.js')

test('test multiplication', t => {
  let five = new Dollar(5);
  let product = five.times(2);
  t.is(10, product.amount);
  
  product = five.times(3);
  t.is(15, product.amount)
})