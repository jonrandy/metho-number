# Metho Number
Number prototype extensions using the [Metho](https://github.com/jonrandy/metho) library:

## Usage
```js
import { to, of, hex, oct, bin, abs, base, even, odd, ceil, floor, round, next, pred, gcd, times, chr } from "metho-number"

// to
1[to(5)] // [1, 2, 3, 4, 5]
9[to(7)] // [9, 8, 7]
2[to(6, {step: 2})] // [2, 4, 6]

// of
3[of(3)] // [3, 3, 3]
4[of('Hi')] // ['Hi', 'Hi', 'Hi', 'Hi']

// hex
254[hex] // 'fe'

// oct
16[oct] // '20'

// bin
33[bin] // '100001'

// abs
(-11)[abs] // 11

// base(n)
9[base(3)] // 100

// even
2[even] // true
319[even] // false

// odd
256[odd] // false
37[odd] // true

// ceil
3.7[ceil] // 4
(-3.7)[ceil] // -3

// floor
3.7[floor] // 3
(-3.7)[floor] // -4

// round
3.7[round] // 4
(-3.7)[round] // -4

// next
1[next] // 2
(-42)[next] // -41

// pred
1[pred] // 0
(-42)[pred] // -43

// gcd(n)
12[gcd(16)] // 4

// times(i)
const sayHello = () => console.log("Hello")
3[times(sayHello)] // run sayHello 3 times

// chr
65[chr] // 'A'

```