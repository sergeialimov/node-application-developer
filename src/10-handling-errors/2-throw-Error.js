function doTask(amount) {
  if(typeof(amount) !== 'number') throw new Error('amount is not a number')
  
  // the following is not recommended
  if (amount <= 0 ) throw 'must be > 0'
  return amount / 2
}

doTask(0)