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
  if (typeof amount !== 'number') throw codify(
    new TypeError('amount must be a number'),
    'ERR_AMOUNT_MUST_BE_NUMBER'
  )
  if (amount <= 0) throw codify(
    new RangeError('amount must be greater than zero'),
    'ERR_AMOUNT_MUST_EXCEED_ZERO'
  )
  if (amount % 2) throw new OddError('amount')
  return amount/2
}

// WARNING: NEVER DO THIS:
/**
 * The doTask(3) call will throw an OddError error, but this will not be handled in the catch block because the function passed to setTimeout is called a hundred milliseconds later. By this time the try/catch block has already been executed, so this will result in the error not being handled:
 */
// try {
//   setTimeout(() => {
//     const result = doTask(3)
//     console.log('result', result)
//   }, 100)
// } catch (err) {
//   if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
//     console.error('wrong type')
//   } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
//     console.error('out of range')
//   } else if (err.code === 'ERR_MUST_BE_EVEN') {
//     console.error('cannot be odd')
//   } else {
//     console.error('Unknown error', err)
//   }
// }

// DO INSTEAD
setTimeout(() => {
  try {
    const result = doTask(3)
    console.log('result', result)
  } catch (err) {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
      console.error('wrong type')
    } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
      console.error('out of range')
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd')
    } else {
      console.error('Unknown error', err)
    }
  }
}, 100)