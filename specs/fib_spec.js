const assert = require('assert');
const { fib, sumOddsWithCeil } = require('../index')

describe('fib', function() {
  it('computes fib given values', function() {
    assert(fib(5) === 5)
    assert(fib(10) === 55)
    assert(fib(20) === 6765)
    assert(fib(50) === 12586234507)
  })
})

describe('sumOddsWithCeil', function() {
  it('should sum odd number in sequence upto a max ceiling', function() {
    assert(sumOddsWithCeil(0) === 0)
    assert(sumOddsWithCeil(1) === 1)
    assert(sumOddsWithCeil(10) === 10)
    assert(sumOddsWithCeil(100) === 188)
  })
})
