'use strict'

const { execSync, exec } = require('child_process')
// const output = execSync(
//   `node -e "console.log('subprocess stdio output')"`
// )
// console.log(output.toString())


// console.log(execSync('ls').toString())



// const out = execSync(
//   `"${process.execPath}" -e "console.error('subprocess stdio output')"`
// )
// console.log(out.toString())

// try {
//   execSync(`"${process.execPath}" -e "process.exit(1)"`)
// } catch (err) {
//   console.error(err)
// }

// try {
//   execSync(`"${process.execPath}" -e "throw Error('kaboom')"`)
// } catch (err) {
//   console.error('CAUGHT ERROR:', err)
// }


exec(
  `"${process.execPath}" -e "console.log('A'); throw Error('B')"`,
  (err, stdout, stdin) => {
    console.log('err', err)
    console.log('stdout', stdout)
    console.log('stdin', stdin)
  }
)

