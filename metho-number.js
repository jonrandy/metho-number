//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const target = Number.prototype

// range syntax: x[to(y, [{step: s}])]
export const to = Metho.add(
  target,
  function(end, {step} = {step: this<=end ? 1 : -1}) {
    let arr = [], i, d = end>this
    for (i=+this; d?(i<=end):(i>=end); i+=step) arr.push(i)
    return arr
  }
)

// construct an array of n things
export const of = Metho.add(
  target,
  function(thing) {
    return Array.from({length:+this}, _=>thing)
  }
)

// convert number to hexadecimal
export const hex = Metho.add(
  target,
  function() {
    return this.toString(16)
  }
)

// convert number to binary
export const bin = Metho.add(
  target,
  function() {
    return this.toString(2)
  }
)

// convert number to base n
export const base = Metho.add(
  target,
  function(n) {
    return this.toString(n)
  }
)

// is number even?
export const even = Metho.add(
  target,
  function() {
    return !(this&1)
  }
)

// is number odd?
export const odd = Metho.add(
  target,
  function() {
    return !!(this&1)
  }
)

// ceiling
export const ceil = Metho.add(
  target,
  function() {
    return Math.ceil(this)
  }
)

// floor
export const floor = Metho.add(
  target,
  function() {
    return Math.floor(this)
  }
)

// round
export const round = Metho.add(
  target,
  function() {
    return Math.round(this)
  }
)

// next
export const next = Metho.add(
  target,
  function() {
    return ~~this+1
  }
)

// pred
export const pred = Metho.add(
  target,
  function() {
    return ~~this+1
  }
)

// gcd
export const gcd = Metho.add(
  target,
  function(b) {
    let aa = Math.abs(this), ab = Math.abs(b)
    if (aa == 0)
      return ab

    while (ab != 0) {
      if (aa > ab)
        aa = aa - ab
      else
        ab = ab - aa
    }

    return aa
  }
)


// times
export const times = Metho.add(
  target,
  function(i) {
    const t = typeof i
    if (t === 'string') {
      return this[of(i)].join('')
    } else if (t==='function') {
      for (let n=1; n<=+this; n++) i()
    }
    return undefined
  }
)


// chr
export const chr = Metho.add(
  target,
  function() { return String.fromCharCode(this) }
)



