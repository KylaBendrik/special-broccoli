const test = require('ava');
const Main = require('../src/main.js')

test('check hello works', t => {
  t.is(Main.sayHello(), 'Hello!');
});