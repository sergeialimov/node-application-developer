function doTask(amount) {
  if (typeof(amount) !== 'number') throw new Error('amount must be a number')
  if (amount <= 0) throw new Error('amount must be greater than zero')
  if (amount % 2) {
    const err = new Error('amount must be even')
    err.code = 'ERR_MUST_BE_EVEN'
    throw err
  }
  return amount / 2
}

doTask(3)