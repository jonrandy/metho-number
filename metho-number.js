//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const target = Number.prototype

// range syntax: x[to(y, [{step: s}])]
export const to = Metho.add(
  target,
  function to(end, {step = this<=end ? 1 : -1} = {}) {
    let arr = [], i, d = end>this
      if (d)
        for (i=+this; i<=end; i+=step) arr.push(i)
      else
        for (i=+this; i>=end; i+=step) arr.push(i)
    return arr
  }
)

// construct an array of n things
export const of = Metho.add(
  target,
  function of(thing) {
    return Array.from({length:+this}, ()=>thing)
  }
)

// convert number to hexadecimal
export const hex = Metho.add(
  target,
  function hex() {
    return this.toString(16)
  }
)

// convert number to octal
export const oct = Metho.add(
  target,
  function oct() {
    return this.toString(8)
  }
)

// convert number to binary
export const bin = Metho.add(
  target,
  function bin() {
    return this.toString(2)
  }
)

// convert number to absolute value
export const abs = Metho.add(
  target,
  function abs() {
    return Math.abs(this)
  }
)

// convert number to base n
export const base = Metho.add(
  target,
  function base(n) {
    return this.toString(n)
  }
)

// is number even?
export const even = Metho.add(
  target,
  function even() {
    return !(this&1)
  }
)

// is number odd?
export const odd = Metho.add(
  target,
  function odd() {
    return !!(this&1)
  }
)

// ceiling
export const ceil = Metho.add(
  target,
  function ceil() {
    return Math.ceil(this)
  }
)

// floor
export const floor = Metho.add(
  target,
  function floor() {
    return Math.floor(this)
  }
)

// round
export const round = Metho.add(
  target,
  function round() {
    return Math.round(this)
  }
)

// next
export const next = Metho.add(
  target,
  function next() {
    return ~~this+1
  }
)

// pred
export const pred = Metho.add(
  target,
  function pred() {
    return ~~this-1
  }
)

// gcd
export const gcd = Metho.add(
  target,
  function gcd(b) {
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
  function times(i) {
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
  function chr() { return String.fromCharCode(this) }
)

// clamp
export const clamp = Metho.add(
  target,
  function clamp(min, max) { return Math.min(Math.max(this, min), max) }
)
