var buf1, buf2, buf3, buf4
undefined
> buf1 = Buffer.alloc(10)
<Buffer 00 00 00 00 00 00 00 00 00 00>
> buf2 = buf1.slice(2,3)
<Buffer 00>
> buf2[0]
0
> buf2[0] = 100
100
> buf2
<Buffer 64>
> buf1
<Buffer 00 00 64 00 00 00 00 00 00 00>
> buf3 = new Uint8Array(10)
Uint8Array(10) [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]
> buf4 = buf3.slice(2, 3)
Uint8Array(1) [ 0 ]
> buf4[0] = 100
100
> buf4
Uint8Array(1) [ 100 ]
> buf3
Uint8Array(10) [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]
