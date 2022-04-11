const buffer = Buffer.from('test', 'utf8')


Buffer.from('👀')
<Buffer f0 9f 91 80>
> Buffer.from('👀', 'UTF16LE')
<Buffer 3d d8 40 dc>
