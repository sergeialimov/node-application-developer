// Native error constructors

// node -p 'stmh'
// ReferenceError: smth is not defined

/**
 * node -p 'var err = new SyntaxError(); err instanceof Error'
 * true
 * 
 * node -p 'var err = new SyntaxError(); err instanceof SyntaxError'
 * true
 * 
 * node -p 'var err = new SyntaxError(); err instanceof EvalError'
 * false
 */


/**
 * node -e "var err = new TypeError(); console.log('err is:', err.name)"
 * err is: TypeError
 * 
 * node -e "var err = new Error(); console.log('err is:', err.name)"
 */


function doTask(amount) {
  if (typeof amount !== 'number') throw new TypeError('amount must be a number')
  if (amount <= 0) throw new RangeError('amount must be greater than zero')
}

// doTask('test')
doTask(0)