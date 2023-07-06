// PER http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html

const PHI = 1.6180339; // golden ration
const INVALID_N_ERROR_MSG = 'sumOddsWithCeil expects a positive integer';

function isOdd(n) {
  return n % 2 !== 0;
}

function fib(n) { // eslint-disable-line consistent-return
  // for now < 0 is ignored
  if (n > -1) {
    return Math.round((PHI ** n) / Math.sqrt(5));
  }
}

// given n return the closes index <= n
function nearestFibIndex(n) {
  const parts = (Math.log(n) + (Math.log(5) / 2)) / Math.log(PHI);
  const floorPart = Math.floor(parts);
  const ceilPart = Math.ceil(parts);
  const fibFloor = fib(floorPart);
  return fibFloor <= n ? floorPart : ceilPart;
}

/*
    - Find the max fib index represented by maxN
    - starting at 1: first ODD index, upto maxN
        - increment SUM for the result of f(n), where result is odd
*/
function sumOddsWithCeil(ceil) {
  if (!Number.isInteger(ceil) || ceil < 0) {
    throw Error(`${INVALID_N_ERROR_MSG}: got ceil=${ceil}`);
  }

  const maxN = nearestFibIndex(ceil);
  let sum = 0;
  for (let x = 1; x <= maxN; x += 1) {
    const v = fib(x);
    if (isOdd(v)) {
      sum += v;
    }
  }

  return sum;
}

module.exports = {fib, sumOddsWithCeil};
