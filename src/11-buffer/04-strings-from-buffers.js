const b = Buffer.from('👀')
undefined
> b
<Buffer f0 9f 91 80>
> b.toString()
'👀'

> b.toString('hex')
'f09f9180'
> b.toString('base64')
'8J+RgA=='