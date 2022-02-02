class OddError extends Error {
  constructor(varName = '') {
    super(varName + ' must be even')
    this.code = 'ERR_MUST_BE_EVEN'
  }
  get name () {
    return 'OddError [' + this.code + ']'
  }
}

function doTask (amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number')
  if (amount <= 0) throw new RangeError('amount must be greater than zero')

  if (amount % 2) throw new OddError('amount')
  return amount / 2;
}

try {
  const result = doTask(4)
  console.log('result', result)
} catch (err) {
  console.error('Error caught: ', err)
}



try {
  const result = doTask(3)
  console.log('result', result)
} catch (err) {
  if (typeof(err) === 'TypeError') {
    console.log('wrong type')
  } else if (typeof(err) === 'RangeError') {
    console.log('wrong range')
  } else if (err.code === 'ERR_MUST_BE_EVEN') {
    console.log('cannot be odd')
  // or
  // } else if (typeof(err) === 'OddError') {
  //   console.log('cannot be odd')
  } else {
    console.log('Unknown error', err)
  }
}

// doTask(3)
// doTask(-1)
// doTask('smth')