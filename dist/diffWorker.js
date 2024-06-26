"use strict";

var $e = Object.defineProperty;
var Xe = (i, e) => {
  for (var n in e) {
    $e(i, n, {
      get: e[n],
      enumerable: true
    });
  }
};
var He = require("worker_threads");
var _e = {};
Xe(_e, {
  computeDiff: () => cn
});
var me = class {
  constructor() {
    this.listeners = [];
    this.unexpectedErrorHandler = function (e) {
      setTimeout(() => {
        throw e.stack ? ee.isErrorNoTelemetry(e) ? new ee(`${e.message}

${e.stack}`) : new Error(`${e.message}

${e.stack}`) : e;
      }, 0);
    };
  }
  addListener(e) {
    this.listeners.push(e);
    return () => {
      this._removeListener(e);
    };
  }
  emit(e) {
    this.listeners.forEach(n => {
      n(e);
    });
  }
  _removeListener(e) {
    this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  setUnexpectedErrorHandler(e) {
    this.unexpectedErrorHandler = e;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e);
    this.emit(e);
  }
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
};
var Je = new me();
function he(i) {
  if (!Ye(i)) {
    Je.onUnexpectedError(i);
  }
}
var ce = "Canceled";
function Ye(i) {
  if (i instanceof C) {
    return true;
  } else {
    return i instanceof Error && i.name === ce && i.message === ce;
  }
}
var C = class extends Error {
  constructor() {
    super(ce);
    this.name = this.message;
  }
};
var ee = class i extends Error {
  constructor(n) {
    super(n);
    this.name = "CodeExpectedError";
  }
  static fromError(n) {
    if (n instanceof i) {
      return n;
    }
    let t = new i();
    t.message = n.message;
    t.stack = n.stack;
    return t;
  }
  static isErrorNoTelemetry(n) {
    return n.name === "CodeExpectedError";
  }
};
var w = class i extends Error {
  constructor(e) {
    super(e || "An unexpected bug occurred.");
    Object.setPrototypeOf(this, i.prototype);
  }
};
function M(i, e) {
  let n = K(i, e);
  if (n === -1) {
    return undefined;
  } else {
    return i[n];
  }
}
function K(i, e, n = 0, t = i.length) {
  let r = n;
  let u = t;
  while (r < u) {
    let s = Math.floor((r + u) / 2);
    if (e(i[s])) {
      r = s + 1;
    } else {
      u = s;
    }
  }
  return r - 1;
}
function xe(i, e) {
  let n = H(i, e);
  if (n === i.length) {
    return undefined;
  } else {
    return i[n];
  }
}
function H(i, e, n = 0, t = i.length) {
  let r = n;
  let u = t;
  while (r < u) {
    let s = Math.floor((r + u) / 2);
    if (e(i[s])) {
      u = s;
    } else {
      r = s + 1;
    }
  }
  return r;
}
var G = class i {
  constructor(e) {
    this._array = e;
    this._findLastMonotonousLastIdx = 0;
  }
  static {
    this.assertInvariants = false;
  }
  findLastMonotonous(e) {
    if (i.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (let t of this._array) {
          if (this._prevFindLastPredicate(t) && !e(t)) {
            throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
        }
      }
      this._prevFindLastPredicate = e;
    }
    let n = K(this._array, e, this._findLastMonotonousLastIdx);
    this._findLastMonotonousLastIdx = n + 1;
    if (n === -1) {
      return undefined;
    } else {
      return this._array[n];
    }
  }
};
function Ee(i, e, n = (t, r) => t === r) {
  if (i === e) {
    return true;
  }
  if (!i || !e || i.length !== e.length) {
    return false;
  }
  for (let t = 0, r = i.length; t < r; t++) {
    if (!n(i[t], e[t])) {
      return false;
    }
  }
  return true;
}
function* Te(i, e) {
  let n;
  let t;
  for (let r of i) {
    if (t !== undefined && e(t, r)) {
      n.push(r);
    } else {
      if (n) {
        yield n;
      }
      n = [r];
    }
    t = r;
  }
  if (n) {
    yield n;
  }
}
function ve(i, e) {
  for (let n = 0; n <= i.length; n++) {
    e(n === 0 ? undefined : i[n - 1], n === i.length ? undefined : i[n]);
  }
}
function Ie(i, e) {
  for (let n = 0; n < i.length; n++) {
    e(n === 0 ? undefined : i[n - 1], i[n], n + 1 === i.length ? undefined : i[n + 1]);
  }
}
function Ne(i, e) {
  for (let n of e) {
    i.push(n);
  }
}
var ye;
(o => {
  function i(l) {
    return l < 0;
  }
  o.isLessThan = i;
  function e(l) {
    return l <= 0;
  }
  o.isLessThanOrEqual = e;
  function n(l) {
    return l > 0;
  }
  o.isGreaterThan = n;
  function t(l) {
    return l === 0;
  }
  o.isNeitherLessOrGreaterThan = t;
  o.greaterThan = 1;
  o.lessThan = -1;
  o.neitherLessOrGreaterThan = 0;
})(ye ||= {});
function j(i, e) {
  return (n, t) => e(i(n), i(t));
}
var $ = (i, e) => i - e;
function we(i) {
  return (e, n) => -i(e, n);
}
var Le = class i {
  constructor(e) {
    this.iterate = e;
  }
  static {
    this.empty = new i(e => {});
  }
  forEach(e) {
    this.iterate(n => {
      e(n);
      return true;
    });
  }
  toArray() {
    let e = [];
    this.iterate(n => {
      e.push(n);
      return true;
    });
    return e;
  }
  filter(e) {
    return new i(n => this.iterate(t => e(t) ? n(t) : true));
  }
  map(e) {
    return new i(n => this.iterate(t => n(e(t))));
  }
  some(e) {
    let n = false;
    this.iterate(t => {
      n = e(t);
      return !n;
    });
    return n;
  }
  findFirst(e) {
    let n;
    this.iterate(t => e(t) ? (n = t, false) : true);
    return n;
  }
  findLast(e) {
    let n;
    this.iterate(t => {
      if (e(t)) {
        n = t;
      }
      return true;
    });
    return n;
  }
  findLastMaxBy(e) {
    let n;
    let t = true;
    this.iterate(r => {
      if (t || ye.isGreaterThan(e(r, n))) {
        t = false;
        n = r;
      }
      return true;
    });
    return n;
  }
};
function ne(i) {
  if (!i()) {
    debugger;
    i();
    he(new w("Assertion Failed"));
  }
}
function Se(i, e) {
  let n = 0;
  while (n < i.length - 1) {
    let t = i[n];
    let r = i[n + 1];
    if (!e(t, r)) {
      return false;
    }
    n++;
  }
  return true;
}
var R = class i {
  constructor(e, n) {
    this.start = e;
    this.endExclusive = n;
    if (e > n) {
      throw new w(`Invalid range: ${this.toString()}`);
    }
  }
  static addRange(e, n) {
    let t = 0;
    while (t < n.length && n[t].endExclusive < e.start) {
      t++;
    }
    let r = t;
    while (r < n.length && n[r].start <= e.endExclusive) {
      r++;
    }
    if (t === r) {
      n.splice(t, 0, e);
    } else {
      let u = Math.min(e.start, n[t].start);
      let s = Math.max(e.endExclusive, n[r - 1].endExclusive);
      n.splice(t, r - t, new i(u, s));
    }
  }
  static tryCreate(e, n) {
    if (e <= n) {
      return new i(e, n);
    }
  }
  static ofLength(e) {
    return new i(0, e);
  }
  static ofStartAndLength(e, n) {
    return new i(e, e + n);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(e) {
    return new i(this.start + e, this.endExclusive + e);
  }
  deltaStart(e) {
    return new i(this.start + e, this.endExclusive);
  }
  deltaEnd(e) {
    return new i(this.start, this.endExclusive + e);
  }
  get length() {
    return this.endExclusive - this.start;
  }
  toString() {
    return `[${this.start}, ${this.endExclusive})`;
  }
  equals(e) {
    return this.start === e.start && this.endExclusive === e.endExclusive;
  }
  containsRange(e) {
    return this.start <= e.start && e.endExclusive <= this.endExclusive;
  }
  contains(e) {
    return this.start <= e && e < this.endExclusive;
  }
  join(e) {
    return new i(Math.min(this.start, e.start), Math.max(this.endExclusive, e.endExclusive));
  }
  intersect(e) {
    let n = Math.max(this.start, e.start);
    let t = Math.min(this.endExclusive, e.endExclusive);
    if (n <= t) {
      return new i(n, t);
    }
  }
  intersects(e) {
    let n = Math.max(this.start, e.start);
    let t = Math.min(this.endExclusive, e.endExclusive);
    return n < t;
  }
  intersectsOrTouches(e) {
    let n = Math.max(this.start, e.start);
    let t = Math.min(this.endExclusive, e.endExclusive);
    return n <= t;
  }
  isBefore(e) {
    return this.endExclusive <= e.start;
  }
  isAfter(e) {
    return this.start >= e.endExclusive;
  }
  slice(e) {
    return e.slice(this.start, this.endExclusive);
  }
  substring(e) {
    return e.substring(this.start, this.endExclusive);
  }
  clip(e) {
    if (this.isEmpty) {
      throw new w(`Invalid clipping range: ${this.toString()}`);
    }
    return Math.max(this.start, Math.min(this.endExclusive - 1, e));
  }
  clipCyclic(e) {
    if (this.isEmpty) {
      throw new w(`Invalid clipping range: ${this.toString()}`);
    }
    if (e < this.start) {
      return this.endExclusive - (this.start - e) % this.length;
    } else if (e >= this.endExclusive) {
      return this.start + (e - this.start) % this.length;
    } else {
      return e;
    }
  }
  map(e) {
    let n = [];
    for (let t = this.start; t < this.endExclusive; t++) {
      n.push(e(t));
    }
    return n;
  }
  forEach(e) {
    for (let n = this.start; n < this.endExclusive; n++) {
      e(n);
    }
  }
};
var O = class i {
  constructor(e, n) {
    this.lineNumber = e;
    this.column = n;
  }
  with(e = this.lineNumber, n = this.column) {
    if (e === this.lineNumber && n === this.column) {
      return this;
    } else {
      return new i(e, n);
    }
  }
  delta(e = 0, n = 0) {
    return this.with(this.lineNumber + e, this.column + n);
  }
  equals(e) {
    return i.equals(this, e);
  }
  static equals(e, n) {
    if (!e && !n) {
      return true;
    } else {
      return !!e && !!n && e.lineNumber === n.lineNumber && e.column === n.column;
    }
  }
  isBefore(e) {
    return i.isBefore(this, e);
  }
  static isBefore(e, n) {
    if (e.lineNumber < n.lineNumber) {
      return true;
    } else if (n.lineNumber < e.lineNumber) {
      return false;
    } else {
      return e.column < n.column;
    }
  }
  isBeforeOrEqual(e) {
    return i.isBeforeOrEqual(this, e);
  }
  static isBeforeOrEqual(e, n) {
    if (e.lineNumber < n.lineNumber) {
      return true;
    } else if (n.lineNumber < e.lineNumber) {
      return false;
    } else {
      return e.column <= n.column;
    }
  }
  static compare(e, n) {
    let t = e.lineNumber | 0;
    let r = n.lineNumber | 0;
    if (t === r) {
      let u = e.column | 0;
      let s = n.column | 0;
      return u - s;
    }
    return t - r;
  }
  clone() {
    return new i(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(e) {
    return new i(e.lineNumber, e.column);
  }
  static isIPosition(e) {
    return e && typeof e.lineNumber == "number" && typeof e.column == "number";
  }
  toJSON() {
    return {
      lineNumber: this.lineNumber,
      column: this.column
    };
  }
};
var S = class i {
  constructor(e, n, t, r) {
    if (e > t || e === t && n > r) {
      this.startLineNumber = t;
      this.startColumn = r;
      this.endLineNumber = e;
      this.endColumn = n;
    } else {
      this.startLineNumber = e;
      this.startColumn = n;
      this.endLineNumber = t;
      this.endColumn = r;
    }
  }
  isEmpty() {
    return i.isEmpty(this);
  }
  static isEmpty(e) {
    return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
  }
  containsPosition(e) {
    return i.containsPosition(this, e);
  }
  static containsPosition(e, n) {
    return n.lineNumber >= e.startLineNumber && n.lineNumber <= e.endLineNumber && (n.lineNumber !== e.startLineNumber || n.column >= e.startColumn) && (n.lineNumber !== e.endLineNumber || n.column <= e.endColumn);
  }
  static strictContainsPosition(e, n) {
    return n.lineNumber >= e.startLineNumber && n.lineNumber <= e.endLineNumber && (n.lineNumber !== e.startLineNumber || n.column > e.startColumn) && (n.lineNumber !== e.endLineNumber || n.column < e.endColumn);
  }
  containsRange(e) {
    return i.containsRange(this, e);
  }
  static containsRange(e, n) {
    return n.startLineNumber >= e.startLineNumber && n.endLineNumber >= e.startLineNumber && n.startLineNumber <= e.endLineNumber && n.endLineNumber <= e.endLineNumber && (n.startLineNumber !== e.startLineNumber || n.startColumn >= e.startColumn) && (n.endLineNumber !== e.endLineNumber || n.endColumn <= e.endColumn);
  }
  strictContainsRange(e) {
    return i.strictContainsRange(this, e);
  }
  static strictContainsRange(e, n) {
    return n.startLineNumber >= e.startLineNumber && n.endLineNumber >= e.startLineNumber && n.startLineNumber <= e.endLineNumber && n.endLineNumber <= e.endLineNumber && (n.startLineNumber !== e.startLineNumber || n.startColumn > e.startColumn) && (n.endLineNumber !== e.endLineNumber || n.endColumn < e.endColumn);
  }
  plusRange(e) {
    return i.plusRange(this, e);
  }
  static plusRange(e, n) {
    let t;
    let r;
    let u;
    let s;
    if (n.startLineNumber < e.startLineNumber) {
      t = n.startLineNumber;
      r = n.startColumn;
    } else if (n.startLineNumber === e.startLineNumber) {
      t = n.startLineNumber;
      r = Math.min(n.startColumn, e.startColumn);
    } else {
      t = e.startLineNumber;
      r = e.startColumn;
    }
    if (n.endLineNumber > e.endLineNumber) {
      u = n.endLineNumber;
      s = n.endColumn;
    } else if (n.endLineNumber === e.endLineNumber) {
      u = n.endLineNumber;
      s = Math.max(n.endColumn, e.endColumn);
    } else {
      u = e.endLineNumber;
      s = e.endColumn;
    }
    return new i(t, r, u, s);
  }
  intersectRanges(e) {
    return i.intersectRanges(this, e);
  }
  static intersectRanges(e, n) {
    let t = e.startLineNumber;
    let r = e.startColumn;
    let u = e.endLineNumber;
    let s = e.endColumn;
    let o = n.startLineNumber;
    let l = n.startColumn;
    let a = n.endLineNumber;
    let m = n.endColumn;
    if (t < o) {
      t = o;
      r = l;
    } else if (t === o) {
      r = Math.max(r, l);
    }
    if (u > a) {
      u = a;
      s = m;
    } else if (u === a) {
      s = Math.min(s, m);
    }
    if (t > u || t === u && r > s) {
      return null;
    } else {
      return new i(t, r, u, s);
    }
  }
  equalsRange(e) {
    return i.equalsRange(this, e);
  }
  static equalsRange(e, n) {
    if (!e && !n) {
      return true;
    } else {
      return !!e && !!n && e.startLineNumber === n.startLineNumber && e.startColumn === n.startColumn && e.endLineNumber === n.endLineNumber && e.endColumn === n.endColumn;
    }
  }
  getEndPosition() {
    return i.getEndPosition(this);
  }
  static getEndPosition(e) {
    return new O(e.endLineNumber, e.endColumn);
  }
  getStartPosition() {
    return i.getStartPosition(this);
  }
  static getStartPosition(e) {
    return new O(e.startLineNumber, e.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(e, n) {
    return new i(this.startLineNumber, this.startColumn, e, n);
  }
  setStartPosition(e, n) {
    return new i(e, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return i.collapseToStart(this);
  }
  static collapseToStart(e) {
    return new i(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn);
  }
  collapseToEnd() {
    return i.collapseToEnd(this);
  }
  static collapseToEnd(e) {
    return new i(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn);
  }
  delta(e) {
    return new i(this.startLineNumber + e, this.startColumn, this.endLineNumber + e, this.endColumn);
  }
  static fromPositions(e, n = e) {
    return new i(e.lineNumber, e.column, n.lineNumber, n.column);
  }
  static lift(e) {
    if (e) {
      return new i(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn);
    } else {
      return null;
    }
  }
  static isIRange(e) {
    return e && typeof e.startLineNumber == "number" && typeof e.startColumn == "number" && typeof e.endLineNumber == "number" && typeof e.endColumn == "number";
  }
  static areIntersectingOrTouching(e, n) {
    return e.endLineNumber >= n.startLineNumber && (e.endLineNumber !== n.startLineNumber || e.endColumn >= n.startColumn) && n.endLineNumber >= e.startLineNumber && (n.endLineNumber !== e.startLineNumber || n.endColumn >= e.startColumn);
  }
  static areIntersecting(e, n) {
    return e.endLineNumber >= n.startLineNumber && (e.endLineNumber !== n.startLineNumber || e.endColumn > n.startColumn) && n.endLineNumber >= e.startLineNumber && (n.endLineNumber !== e.startLineNumber || n.endColumn > e.startColumn);
  }
  static compareRangesUsingStarts(e, n) {
    if (e && n) {
      let u = e.startLineNumber | 0;
      let s = n.startLineNumber | 0;
      if (u === s) {
        let o = e.startColumn | 0;
        let l = n.startColumn | 0;
        if (o === l) {
          let a = e.endLineNumber | 0;
          let m = n.endLineNumber | 0;
          if (a === m) {
            let f = e.endColumn | 0;
            let g = n.endColumn | 0;
            return f - g;
          }
          return a - m;
        }
        return o - l;
      }
      return u - s;
    }
    return (e ? 1 : 0) - (n ? 1 : 0);
  }
  static compareRangesUsingEnds(e, n) {
    if (e.endLineNumber === n.endLineNumber) {
      if (e.endColumn === n.endColumn) {
        if (e.startLineNumber === n.startLineNumber) {
          return e.startColumn - n.startColumn;
        } else {
          return e.startLineNumber - n.startLineNumber;
        }
      } else {
        return e.endColumn - n.endColumn;
      }
    } else {
      return e.endLineNumber - n.endLineNumber;
    }
  }
  static spansMultipleLines(e) {
    return e.endLineNumber > e.startLineNumber;
  }
  toJSON() {
    return this;
  }
};
var v = class i {
  static fromRange(e) {
    return new i(e.startLineNumber, e.endLineNumber);
  }
  static fromRangeInclusive(e) {
    return new i(e.startLineNumber, e.endLineNumber + 1);
  }
  static subtract(e, n) {
    if (n) {
      if (e.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < e.endLineNumberExclusive) {
        return [new i(e.startLineNumber, n.startLineNumber), new i(n.endLineNumberExclusive, e.endLineNumberExclusive)];
      } else if (n.startLineNumber <= e.startLineNumber && e.endLineNumberExclusive <= n.endLineNumberExclusive) {
        return [];
      } else if (n.endLineNumberExclusive < e.endLineNumberExclusive) {
        return [new i(Math.max(n.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)];
      } else {
        return [new i(e.startLineNumber, Math.min(n.startLineNumber, e.endLineNumberExclusive))];
      }
    } else {
      return [e];
    }
  }
  static joinMany(e) {
    if (e.length === 0) {
      return [];
    }
    let n = new k(e[0].slice());
    for (let t = 1; t < e.length; t++) {
      n = n.getUnion(new k(e[t].slice()));
    }
    return n.ranges;
  }
  static ofLength(e, n) {
    return new i(e, e + n);
  }
  static deserialize(e) {
    return new i(e[0], e[1]);
  }
  constructor(e, n) {
    if (e > n) {
      throw new w(`startLineNumber ${e} cannot be after endLineNumberExclusive ${n}`);
    }
    this.startLineNumber = e;
    this.endLineNumberExclusive = n;
  }
  contains(e) {
    return this.startLineNumber <= e && e < this.endLineNumberExclusive;
  }
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  delta(e) {
    return new i(this.startLineNumber + e, this.endLineNumberExclusive + e);
  }
  deltaLength(e) {
    return new i(this.startLineNumber, this.endLineNumberExclusive + e);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(e) {
    return new i(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive));
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  intersect(e) {
    let n = Math.max(this.startLineNumber, e.startLineNumber);
    let t = Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
    if (n <= t) {
      return new i(n, t);
    }
  }
  intersectsStrict(e) {
    return this.startLineNumber < e.endLineNumberExclusive && e.startLineNumber < this.endLineNumberExclusive;
  }
  overlapOrTouch(e) {
    return this.startLineNumber <= e.endLineNumberExclusive && e.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(e) {
    return this.startLineNumber === e.startLineNumber && this.endLineNumberExclusive === e.endLineNumberExclusive;
  }
  toInclusiveRange() {
    if (this.isEmpty) {
      return null;
    } else {
      return new S(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
  }
  toExclusiveRange() {
    return new S(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(e) {
    let n = [];
    for (let t = this.startLineNumber; t < this.endLineNumberExclusive; t++) {
      n.push(e(t));
    }
    return n;
  }
  forEach(e) {
    for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) {
      e(n);
    }
  }
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  includes(e) {
    return this.startLineNumber <= e && e < this.endLineNumberExclusive;
  }
  toOffsetRange() {
    return new R(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
};
var k = class i {
  constructor(e = []) {
    this._normalizedRanges = e;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(e) {
    if (e.length === 0) {
      return;
    }
    let n = H(this._normalizedRanges, r => r.endLineNumberExclusive >= e.startLineNumber);
    let t = K(this._normalizedRanges, r => r.startLineNumber <= e.endLineNumberExclusive) + 1;
    if (n === t) {
      this._normalizedRanges.splice(n, 0, e);
    } else if (n === t - 1) {
      let r = this._normalizedRanges[n];
      this._normalizedRanges[n] = r.join(e);
    } else {
      let r = this._normalizedRanges[n].join(this._normalizedRanges[t - 1]).join(e);
      this._normalizedRanges.splice(n, t - n, r);
    }
  }
  contains(e) {
    let n = M(this._normalizedRanges, t => t.startLineNumber <= e);
    return !!n && n.endLineNumberExclusive > e;
  }
  intersects(e) {
    let n = M(this._normalizedRanges, t => t.startLineNumber < e.endLineNumberExclusive);
    return !!n && n.endLineNumberExclusive > e.startLineNumber;
  }
  getUnion(e) {
    if (this._normalizedRanges.length === 0) {
      return e;
    }
    if (e._normalizedRanges.length === 0) {
      return this;
    }
    let n = [];
    let t = 0;
    let r = 0;
    let u = null;
    while (t < this._normalizedRanges.length || r < e._normalizedRanges.length) {
      let s = null;
      if (t < this._normalizedRanges.length && r < e._normalizedRanges.length) {
        let o = this._normalizedRanges[t];
        let l = e._normalizedRanges[r];
        if (o.startLineNumber < l.startLineNumber) {
          s = o;
          t++;
        } else {
          s = l;
          r++;
        }
      } else if (t < this._normalizedRanges.length) {
        s = this._normalizedRanges[t];
        t++;
      } else {
        s = e._normalizedRanges[r];
        r++;
      }
      if (u === null) {
        u = s;
      } else if (u.endLineNumberExclusive >= s.startLineNumber) {
        u = new v(u.startLineNumber, Math.max(u.endLineNumberExclusive, s.endLineNumberExclusive));
      } else {
        n.push(u);
        u = s;
      }
    }
    if (u !== null) {
      n.push(u);
    }
    return new i(n);
  }
  subtractFrom(e) {
    let n = H(this._normalizedRanges, s => s.endLineNumberExclusive >= e.startLineNumber);
    let t = K(this._normalizedRanges, s => s.startLineNumber <= e.endLineNumberExclusive) + 1;
    if (n === t) {
      return new i([e]);
    }
    let r = [];
    let u = e.startLineNumber;
    for (let s = n; s < t; s++) {
      let o = this._normalizedRanges[s];
      if (o.startLineNumber > u) {
        r.push(new v(u, o.startLineNumber));
      }
      u = o.endLineNumberExclusive;
    }
    if (u < e.endLineNumberExclusive) {
      r.push(new v(u, e.endLineNumberExclusive));
    }
    return new i(r);
  }
  toString() {
    return this._normalizedRanges.map(e => e.toString()).join(", ");
  }
  getIntersection(e) {
    let n = [];
    let t = 0;
    let r = 0;
    while (t < this._normalizedRanges.length && r < e._normalizedRanges.length) {
      let u = this._normalizedRanges[t];
      let s = e._normalizedRanges[r];
      let o = u.intersect(s);
      if (o && !o.isEmpty) {
        n.push(o);
      }
      if (u.endLineNumberExclusive < s.endLineNumberExclusive) {
        t++;
      } else {
        r++;
      }
    }
    return new i(n);
  }
  getWithDelta(e) {
    return new i(this._normalizedRanges.map(n => n.delta(e)));
  }
};
var D = class i {
  constructor(e, n) {
    this.diffs = e;
    this.hitTimeout = n;
  }
  static trivial(e, n) {
    return new i([new N(R.ofLength(e.length), R.ofLength(n.length))], false);
  }
  static trivialTimedOut(e, n) {
    return new i([new N(R.ofLength(e.length), R.ofLength(n.length))], true);
  }
};
var N = class i {
  constructor(e, n) {
    this.seq1Range = e;
    this.seq2Range = n;
  }
  static invert(e, n) {
    let t = [];
    ve(e, (r, u) => {
      t.push(i.fromOffsetPairs(r ? r.getEndExclusives() : A.zero, u ? u.getStarts() : new A(n, (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n)));
    });
    return t;
  }
  static fromOffsetPairs(e, n) {
    return new i(new R(e.offset1, n.offset1), new R(e.offset2, n.offset2));
  }
  swap() {
    return new i(this.seq2Range, this.seq1Range);
  }
  toString() {
    return `${this.seq1Range} <-> ${this.seq2Range}`;
  }
  join(e) {
    return new i(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range));
  }
  delta(e) {
    if (e === 0) {
      return this;
    } else {
      return new i(this.seq1Range.delta(e), this.seq2Range.delta(e));
    }
  }
  deltaStart(e) {
    if (e === 0) {
      return this;
    } else {
      return new i(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e));
    }
  }
  deltaEnd(e) {
    if (e === 0) {
      return this;
    } else {
      return new i(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e));
    }
  }
  intersectsOrTouches(e) {
    return this.seq1Range.intersectsOrTouches(e.seq1Range) || this.seq2Range.intersectsOrTouches(e.seq2Range);
  }
  intersect(e) {
    let n = this.seq1Range.intersect(e.seq1Range);
    let t = this.seq2Range.intersect(e.seq2Range);
    if (!!n && !!t) {
      return new i(n, t);
    }
  }
  getStarts() {
    return new A(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new A(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
};
var A = class i {
  constructor(e, n) {
    this.offset1 = e;
    this.offset2 = n;
  }
  static {
    this.zero = new i(0, 0);
  }
  static {
    this.max = new i(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(e) {
    if (e === 0) {
      return this;
    } else {
      return new i(this.offset1 + e, this.offset2 + e);
    }
  }
  equals(e) {
    return this.offset1 === e.offset1 && this.offset2 === e.offset2;
  }
};
var U = class i {
  static {
    this.instance = new i();
  }
  isValid() {
    return true;
  }
};
var te = class {
  constructor(e) {
    this.timeout = e;
    this.startTime = Date.now();
    this.valid = true;
    if (e <= 0) {
      throw new w("timeout must be positive");
    }
  }
  isValid() {
    if (Date.now() - this.startTime >= this.timeout && this.valid) {
      this.valid = false;
      debugger;
    }
    return this.valid;
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER;
    this.isValid = () => true;
    this.valid = true;
  }
};
var P = class {
  constructor(e, n) {
    this.width = e;
    this.height = n;
    this.array = [];
    this.array = new Array(e * n);
  }
  get(e, n) {
    return this.array[e + n * this.width];
  }
  set(e, n, t) {
    this.array[e + n * this.width] = t;
  }
};
function J(i) {
  return i === 32 || i === 9;
}
var X = class i {
  constructor(e, n, t) {
    this.range = e;
    this.lines = n;
    this.source = t;
    this.histogram = [];
    let r = 0;
    for (let u = e.startLineNumber - 1; u < e.endLineNumberExclusive - 1; u++) {
      let s = n[u];
      for (let l = 0; l < s.length; l++) {
        r++;
        let a = s[l];
        let m = i.getKey(a);
        this.histogram[m] = (this.histogram[m] || 0) + 1;
      }
      r++;
      let o = i.getKey(`
`);
      this.histogram[o] = (this.histogram[o] || 0) + 1;
    }
    this.totalCount = r;
  }
  static {
    this.chrKeys = new Map();
  }
  static getKey(e) {
    let n = this.chrKeys.get(e);
    if (n === undefined) {
      n = this.chrKeys.size;
      this.chrKeys.set(e, n);
    }
    return n;
  }
  computeSimilarity(e) {
    let n = 0;
    let t = Math.max(this.histogram.length, e.histogram.length);
    for (let r = 0; r < t; r++) {
      n += Math.abs((this.histogram[r] ?? 0) - (e.histogram[r] ?? 0));
    }
    return 1 - n / (this.totalCount + e.totalCount);
  }
};
var ie = class {
  compute(e, n, t = U.instance, r) {
    if (e.length === 0 || n.length === 0) {
      return D.trivial(e, n);
    }
    let u = new P(e.length, n.length);
    let s = new P(e.length, n.length);
    let o = new P(e.length, n.length);
    for (let b = 0; b < e.length; b++) {
      for (let p = 0; p < n.length; p++) {
        if (!t.isValid()) {
          return D.trivialTimedOut(e, n);
        }
        let h = b === 0 ? 0 : u.get(b - 1, p);
        let T = p === 0 ? 0 : u.get(b, p - 1);
        let E;
        if (e.getElement(b) === n.getElement(p)) {
          if (b === 0 || p === 0) {
            E = 0;
          } else {
            E = u.get(b - 1, p - 1);
          }
          if (b > 0 && p > 0 && s.get(b - 1, p - 1) === 3) {
            E += o.get(b - 1, p - 1);
          }
          E += r ? r(b, p) : 1;
        } else {
          E = -1;
        }
        let I = Math.max(h, T, E);
        if (I === E) {
          let x = b > 0 && p > 0 ? o.get(b - 1, p - 1) : 0;
          o.set(b, p, x + 1);
          s.set(b, p, 3);
        } else if (I === h) {
          o.set(b, p, 0);
          s.set(b, p, 1);
        } else if (I === T) {
          o.set(b, p, 0);
          s.set(b, p, 2);
        }
        u.set(b, p, I);
      }
    }
    let l = [];
    let a = e.length;
    let m = n.length;
    function f(b, p) {
      if (b + 1 !== a || p + 1 !== m) {
        l.push(new N(new R(b + 1, a), new R(p + 1, m)));
      }
      a = b;
      m = p;
    }
    let g = e.length - 1;
    let c = n.length - 1;
    while (g >= 0 && c >= 0) {
      if (s.get(g, c) === 3) {
        f(g, c);
        g--;
        c--;
      } else if (s.get(g, c) === 1) {
        g--;
      } else {
        c--;
      }
    }
    f(-1, -1);
    l.reverse();
    return new D(l, false);
  }
};
var V = class {
  compute(e, n, t = U.instance) {
    if (e.length === 0 || n.length === 0) {
      return D.trivial(e, n);
    }
    let r = e;
    let u = n;
    function s(p, h) {
      while (p < r.length && h < u.length && r.getElement(p) === u.getElement(h)) {
        p++;
        h++;
      }
      return p;
    }
    let o = 0;
    let l = new fe();
    l.set(0, s(0, 0));
    let a = new ge();
    a.set(0, l.get(0) === 0 ? null : new re(null, 0, 0, l.get(0)));
    let m = 0;
    e: while (true) {
      o++;
      if (!t.isValid()) {
        return D.trivialTimedOut(r, u);
      }
      let p = -Math.min(o, u.length + o % 2);
      let h = Math.min(o, r.length + o % 2);
      for (m = p; m <= h; m += 2) {
        let T = 0;
        let E = m === h ? -1 : l.get(m + 1);
        let I = m === p ? -1 : l.get(m - 1) + 1;
        T++;
        let x = Math.min(Math.max(E, I), r.length);
        let d = x - m;
        T++;
        if (x > r.length || d > u.length) {
          continue;
        }
        let _ = s(x, d);
        l.set(m, _);
        let L = x === E ? a.get(m + 1) : a.get(m - 1);
        a.set(m, _ !== x ? new re(L, x, d, _ - x) : L);
        if (l.get(m) === r.length && l.get(m) - m === u.length) {
          break e;
        }
      }
    }
    let f = a.get(m);
    let g = [];
    let c = r.length;
    let b = u.length;
    while (true) {
      let p = f ? f.x + f.length : 0;
      let h = f ? f.y + f.length : 0;
      if (p !== c || h !== b) {
        g.push(new N(new R(p, c), new R(h, b)));
      }
      if (!f) {
        break;
      }
      c = f.x;
      b = f.y;
      f = f.prev;
    }
    g.reverse();
    return new D(g, false);
  }
};
var re = class {
  constructor(e, n, t, r) {
    this.prev = e;
    this.x = n;
    this.y = t;
    this.length = r;
  }
};
var fe = class {
  constructor() {
    this.positiveArr = new Int32Array(10);
    this.negativeArr = new Int32Array(10);
  }
  get(e) {
    if (e < 0) {
      e = -e - 1;
      return this.negativeArr[e];
    } else {
      return this.positiveArr[e];
    }
  }
  set(e, n) {
    if (e < 0) {
      e = -e - 1;
      if (e >= this.negativeArr.length) {
        let t = this.negativeArr;
        this.negativeArr = new Int32Array(t.length * 2);
        this.negativeArr.set(t);
      }
      this.negativeArr[e] = n;
    } else {
      if (e >= this.positiveArr.length) {
        let t = this.positiveArr;
        this.positiveArr = new Int32Array(t.length * 2);
        this.positiveArr.set(t);
      }
      this.positiveArr[e] = n;
    }
  }
};
var ge = class {
  constructor() {
    this.positiveArr = [];
    this.negativeArr = [];
  }
  get(e) {
    if (e < 0) {
      e = -e - 1;
      return this.negativeArr[e];
    } else {
      return this.positiveArr[e];
    }
  }
  set(e, n) {
    if (e < 0) {
      e = -e - 1;
      this.negativeArr[e] = n;
    } else {
      this.positiveArr[e] = n;
    }
  }
};
var q = class i {
  static inverse(e, n, t) {
    let r = [];
    let u = 1;
    let s = 1;
    for (let l of e) {
      let a = new i(new v(u, l.original.startLineNumber), new v(s, l.modified.startLineNumber));
      if (!a.modified.isEmpty) {
        r.push(a);
      }
      u = l.original.endLineNumberExclusive;
      s = l.modified.endLineNumberExclusive;
    }
    let o = new i(new v(u, n + 1), new v(s, t + 1));
    if (!o.modified.isEmpty) {
      r.push(o);
    }
    return r;
  }
  static clip(e, n, t) {
    let r = [];
    for (let u of e) {
      let s = u.original.intersect(n);
      let o = u.modified.intersect(t);
      if (s && !s.isEmpty && o && !o.isEmpty) {
        r.push(new i(s, o));
      }
    }
    return r;
  }
  constructor(e, n) {
    this.original = e;
    this.modified = n;
  }
  toString() {
    return `{${this.original.toString()}->${this.modified.toString()}}`;
  }
  flip() {
    return new i(this.modified, this.original);
  }
  join(e) {
    return new i(this.original.join(e.original), this.modified.join(e.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
};
var z = class i extends q {
  constructor(n, t, r) {
    super(n, t);
    this.innerChanges = r;
  }
  flip() {
    return new i(this.modified, this.original, this.innerChanges?.map(n => n.flip()));
  }
};
var Y = class i {
  constructor(e, n) {
    this.originalRange = e;
    this.modifiedRange = n;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new i(this.modifiedRange, this.originalRange);
  }
};
var be = class {
  constructor(e, n) {
    this.uri = e;
    this.value = n;
  }
};
function Ze(i) {
  return Array.isArray(i);
}
var Qe;
var se = class i {
  constructor(e, n) {
    this[Qe] = "ResourceMap";
    if (e instanceof i) {
      this.map = new Map(e.map);
      this.toKey = n ?? i.defaultToKey;
    } else if (Ze(e)) {
      this.map = new Map();
      this.toKey = n ?? i.defaultToKey;
      for (let [t, r] of e) {
        this.set(t, r);
      }
    } else {
      this.map = new Map();
      this.toKey = e ?? i.defaultToKey;
    }
  }
  static {
    this.defaultToKey = e => e.toString();
  }
  set(e, n) {
    this.map.set(this.toKey(e), new be(e, n));
    return this;
  }
  get(e) {
    return this.map.get(this.toKey(e))?.value;
  }
  has(e) {
    return this.map.has(this.toKey(e));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(e) {
    return this.map.delete(this.toKey(e));
  }
  forEach(e, n) {
    if (typeof n !== "undefined") {
      e = e.bind(n);
    }
    for (let [t, r] of this.map) {
      e(r.value, r.uri, this);
    }
  }
  *values() {
    for (let e of this.map.values()) {
      yield e.value;
    }
  }
  *keys() {
    for (let e of this.map.values()) {
      yield e.uri;
    }
  }
  *entries() {
    for (let e of this.map.values()) {
      yield [e.uri, e.value];
    }
  }
  *[(Qe = Symbol.toStringTag, Symbol.iterator)]() {
    for (let [, e] of this.map) {
      yield [e.uri, e.value];
    }
  }
};
var Ce;
var De = class {
  constructor(e, n) {
    this[Ce] = "ResourceSet";
    if (!e || typeof e == "function") {
      this._map = new se(e);
    } else {
      this._map = new se(n);
      e.forEach(this.add, this);
    }
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    this._map.set(e, e);
    return this;
  }
  clear() {
    this._map.clear();
  }
  delete(e) {
    return this._map.delete(e);
  }
  forEach(e, n) {
    this._map.forEach((t, r) => e.call(n, r, r, this));
  }
  has(e) {
    return this._map.has(e);
  }
  entries() {
    return this._map.entries();
  }
  keys() {
    return this._map.keys();
  }
  values() {
    return this._map.keys();
  }
  [(Ce = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
};
var en;
var Me = class {
  constructor() {
    this[en] = "LinkedMap";
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
    this._state = 0;
  }
  clear() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
    this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._head?.value;
  }
  get last() {
    return this._tail?.value;
  }
  has(e) {
    return this._map.has(e);
  }
  get(e, n = 0) {
    let t = this._map.get(e);
    if (t) {
      if (n !== 0) {
        this.touch(t, n);
      }
      return t.value;
    }
  }
  set(e, n, t = 0) {
    let r = this._map.get(e);
    if (r) {
      r.value = n;
      if (t !== 0) {
        this.touch(r, t);
      }
    } else {
      r = {
        key: e,
        value: n,
        next: undefined,
        previous: undefined
      };
      switch (t) {
        case 0:
          this.addItemLast(r);
          break;
        case 1:
          this.addItemFirst(r);
          break;
        case 2:
          this.addItemLast(r);
          break;
        default:
          this.addItemLast(r);
          break;
      }
      this._map.set(e, r);
      this._size++;
    }
    return this;
  }
  delete(e) {
    return !!this.remove(e);
  }
  remove(e) {
    let n = this._map.get(e);
    if (n) {
      this._map.delete(e);
      this.removeItem(n);
      this._size--;
      return n.value;
    }
  }
  shift() {
    if (!this._head && !this._tail) {
      return;
    }
    if (!this._head || !this._tail) {
      throw new Error("Invalid list");
    }
    let e = this._head;
    this._map.delete(e.key);
    this.removeItem(e);
    this._size--;
    return e.value;
  }
  forEach(e, n) {
    let t = this._state;
    let r = this._head;
    while (r) {
      if (n) {
        e.bind(n)(r.value, r.key, this);
      } else {
        e(r.value, r.key, this);
      }
      if (this._state !== t) {
        throw new Error("LinkedMap got modified during iteration.");
      }
      r = r.next;
    }
  }
  keys() {
    let e = this;
    let n = this._state;
    let t = this._head;
    let r = {
      [Symbol.iterator]() {
        return r;
      },
      next() {
        if (e._state !== n) {
          throw new Error("LinkedMap got modified during iteration.");
        }
        if (t) {
          let u = {
            value: t.key,
            done: false
          };
          t = t.next;
          return u;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
    return r;
  }
  values() {
    let e = this;
    let n = this._state;
    let t = this._head;
    let r = {
      [Symbol.iterator]() {
        return r;
      },
      next() {
        if (e._state !== n) {
          throw new Error("LinkedMap got modified during iteration.");
        }
        if (t) {
          let u = {
            value: t.value,
            done: false
          };
          t = t.next;
          return u;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
    return r;
  }
  entries() {
    let e = this;
    let n = this._state;
    let t = this._head;
    let r = {
      [Symbol.iterator]() {
        return r;
      },
      next() {
        if (e._state !== n) {
          throw new Error("LinkedMap got modified during iteration.");
        }
        if (t) {
          let u = {
            value: [t.key, t.value],
            done: false
          };
          t = t.next;
          return u;
        } else {
          return {
            value: undefined,
            done: true
          };
        }
      }
    };
    return r;
  }
  [(en = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) {
      return;
    }
    if (e === 0) {
      this.clear();
      return;
    }
    let n = this._head;
    let t = this.size;
    while (n && t > e) {
      this._map.delete(n.key);
      n = n.next;
      t--;
    }
    this._head = n;
    this._size = t;
    if (n) {
      n.previous = undefined;
    }
    this._state++;
  }
  addItemFirst(e) {
    if (!this._head && !this._tail) {
      this._tail = e;
    } else if (this._head) {
      e.next = this._head;
      this._head.previous = e;
    } else {
      throw new Error("Invalid list");
    }
    this._head = e;
    this._state++;
  }
  addItemLast(e) {
    if (!this._head && !this._tail) {
      this._head = e;
    } else if (this._tail) {
      e.previous = this._tail;
      this._tail.next = e;
    } else {
      throw new Error("Invalid list");
    }
    this._tail = e;
    this._state++;
  }
  removeItem(e) {
    if (e === this._head && e === this._tail) {
      this._head = undefined;
      this._tail = undefined;
    } else if (e === this._head) {
      if (!e.next) {
        throw new Error("Invalid list");
      }
      e.next.previous = undefined;
      this._head = e.next;
    } else if (e === this._tail) {
      if (!e.previous) {
        throw new Error("Invalid list");
      }
      e.previous.next = undefined;
      this._tail = e.previous;
    } else {
      let n = e.next;
      let t = e.previous;
      if (!n || !t) {
        throw new Error("Invalid list");
      }
      n.previous = t;
      t.next = n;
    }
    e.next = undefined;
    e.previous = undefined;
    this._state++;
  }
  touch(e, n) {
    if (!this._head || !this._tail) {
      throw new Error("Invalid list");
    }
    if (n === 1 || n === 2) {
      if (n === 1) {
        if (e === this._head) {
          return;
        }
        let t = e.next;
        let r = e.previous;
        if (e === this._tail) {
          r.next = undefined;
          this._tail = r;
        } else {
          t.previous = r;
          r.next = t;
        }
        e.previous = undefined;
        e.next = this._head;
        this._head.previous = e;
        this._head = e;
        this._state++;
      } else if (n === 2) {
        if (e === this._tail) {
          return;
        }
        let t = e.next;
        let r = e.previous;
        if (e === this._head) {
          t.previous = undefined;
          this._head = t;
        } else {
          t.previous = r;
          r.next = t;
        }
        e.next = undefined;
        e.previous = this._tail;
        this._tail.next = e;
        this._tail = e;
        this._state++;
      }
    }
  }
  toJSON() {
    let e = [];
    this.forEach((n, t) => {
      e.push([t, n]);
    });
    return e;
  }
  fromJSON(e) {
    this.clear();
    for (let [n, t] of e) {
      this.set(n, t);
    }
  }
};
var ue = class {
  constructor() {
    this.map = new Map();
  }
  add(e, n) {
    let t = this.map.get(e);
    if (!t) {
      t = new Set();
      this.map.set(e, t);
    }
    t.add(n);
  }
  delete(e, n) {
    let t = this.map.get(e);
    if (t) {
      t.delete(n);
      if (t.size === 0) {
        this.map.delete(e);
      }
    }
  }
  forEach(e, n) {
    let t = this.map.get(e);
    if (t) {
      t.forEach(n);
    }
  }
  get(e) {
    let n = this.map.get(e);
    return n || new Set();
  }
};
var F = class {
  constructor(e, n, t) {
    this.lines = e;
    this.considerWhitespaceChanges = t;
    this.elements = [];
    this.firstCharOffsetByLine = [];
    this.additionalOffsetByLine = [];
    let r = false;
    if (n.start > 0 && n.endExclusive >= e.length) {
      n = new R(n.start - 1, n.endExclusive);
      r = true;
    }
    this.lineRange = n;
    this.firstCharOffsetByLine[0] = 0;
    for (let u = this.lineRange.start; u < this.lineRange.endExclusive; u++) {
      let s = e[u];
      let o = 0;
      if (r) {
        o = s.length;
        s = "";
        r = false;
      } else if (!t) {
        let l = s.trimStart();
        o = s.length - l.length;
        s = l.trimEnd();
      }
      this.additionalOffsetByLine.push(o);
      for (let l = 0; l < s.length; l++) {
        this.elements.push(s.charCodeAt(l));
      }
      if (u < e.length - 1) {
        this.elements.push(10);
        this.firstCharOffsetByLine[u - this.lineRange.start + 1] = this.elements.length;
      }
    }
    this.additionalOffsetByLine.push(0);
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new R(0, this.length));
  }
  getText(e) {
    return this.elements.slice(e.start, e.endExclusive).map(n => String.fromCharCode(n)).join("");
  }
  getElement(e) {
    return this.elements[e];
  }
  get length() {
    return this.elements.length;
  }
  getBoundaryScore(e) {
    let n = Ue(e > 0 ? this.elements[e - 1] : -1);
    let t = Ue(e < this.elements.length ? this.elements[e] : -1);
    if (n === 7 && t === 8) {
      return 0;
    }
    if (n === 8) {
      return 150;
    }
    let r = 0;
    if (n !== t) {
      r += 10;
      if (n === 0 && t === 1) {
        r += 1;
      }
    }
    r += Oe(n);
    r += Oe(t);
    return r;
  }
  translateOffset(e) {
    if (this.lineRange.isEmpty) {
      return new O(this.lineRange.start + 1, 1);
    }
    let n = K(this.firstCharOffsetByLine, t => t <= e);
    return new O(this.lineRange.start + n + 1, e - this.firstCharOffsetByLine[n] + this.additionalOffsetByLine[n] + 1);
  }
  translateRange(e) {
    return S.fromPositions(this.translateOffset(e.start), this.translateOffset(e.endExclusive));
  }
  findWordContaining(e) {
    if (e < 0 || e >= this.elements.length || !pe(this.elements[e])) {
      return;
    }
    let n = e;
    while (n > 0 && pe(this.elements[n - 1])) {
      n--;
    }
    let t = e;
    while (t < this.elements.length && pe(this.elements[t])) {
      t++;
    }
    return new R(n, t);
  }
  countLinesIn(e) {
    return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
  }
  isStronglyEqual(e, n) {
    return this.elements[e] === this.elements[n];
  }
  extendToFullLines(e) {
    let n = M(this.firstCharOffsetByLine, r => r <= e.start) ?? 0;
    let t = xe(this.firstCharOffsetByLine, r => e.endExclusive <= r) ?? this.elements.length;
    return new R(n, t);
  }
};
function pe(i) {
  return i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57;
}
var nn = {
  0: 0,
  1: 0,
  2: 0,
  3: 10,
  4: 2,
  5: 30,
  6: 3,
  7: 10,
  8: 10
};
function Oe(i) {
  return nn[i];
}
function Ue(i) {
  if (i === 10) {
    return 8;
  } else if (i === 13) {
    return 7;
  } else if (J(i)) {
    return 6;
  } else if (i >= 97 && i <= 122) {
    return 0;
  } else if (i >= 65 && i <= 90) {
    return 1;
  } else if (i >= 48 && i <= 57) {
    return 2;
  } else if (i === -1) {
    return 3;
  } else if (i === 44 || i === 59) {
    return 5;
  } else {
    return 4;
  }
}
function Fe(i, e, n, t, r, u) {
  let {
    moves: s,
    excludedChanges: o
  } = rn(i, e, n, u);
  if (!u.isValid()) {
    return [];
  }
  let l = i.filter(m => !o.has(m));
  let a = sn(l, t, r, e, n, u);
  Ne(s, a);
  s = un(s);
  s = s.filter(m => {
    let f = m.original.toOffsetRange().slice(e).map(c => c.trim());
    return f.join(`
`).length >= 15 && tn(f, c => c.length >= 2) >= 2;
  });
  s = on(i, s);
  return s;
}
function tn(i, e) {
  let n = 0;
  for (let t of i) {
    if (e(t)) {
      n++;
    }
  }
  return n;
}
function rn(i, e, n, t) {
  let r = [];
  let u = i.filter(l => l.modified.isEmpty && l.original.length >= 3).map(l => new X(l.original, e, l));
  let s = new Set(i.filter(l => l.original.isEmpty && l.modified.length >= 3).map(l => new X(l.modified, n, l)));
  let o = new Set();
  for (let l of u) {
    let a = -1;
    let m;
    for (let f of s) {
      let g = l.computeSimilarity(f);
      if (g > a) {
        a = g;
        m = f;
      }
    }
    if (a > 0.9 && m) {
      s.delete(m);
      r.push(new q(l.range, m.range));
      o.add(l.source);
      o.add(m.source);
    }
    if (!t.isValid()) {
      return {
        moves: r,
        excludedChanges: o
      };
    }
  }
  return {
    moves: r,
    excludedChanges: o
  };
}
function sn(i, e, n, t, r, u) {
  let s = [];
  let o = new ue();
  for (let g of i) {
    for (let c = g.original.startLineNumber; c < g.original.endLineNumberExclusive - 2; c++) {
      let b = `${e[c - 1]}:${e[c + 1 - 1]}:${e[c + 2 - 1]}`;
      o.add(b, {
        range: new v(c, c + 3)
      });
    }
  }
  let l = [];
  i.sort(j(g => g.modified.startLineNumber, $));
  for (let g of i) {
    let c = [];
    for (let b = g.modified.startLineNumber; b < g.modified.endLineNumberExclusive - 2; b++) {
      let p = `${n[b - 1]}:${n[b + 1 - 1]}:${n[b + 2 - 1]}`;
      let h = new v(b, b + 3);
      let T = [];
      o.forEach(p, ({
        range: E
      }) => {
        for (let x of c) {
          if (x.originalLineRange.endLineNumberExclusive + 1 === E.endLineNumberExclusive && x.modifiedLineRange.endLineNumberExclusive + 1 === h.endLineNumberExclusive) {
            x.originalLineRange = new v(x.originalLineRange.startLineNumber, E.endLineNumberExclusive);
            x.modifiedLineRange = new v(x.modifiedLineRange.startLineNumber, h.endLineNumberExclusive);
            T.push(x);
            return;
          }
        }
        let I = {
          modifiedLineRange: h,
          originalLineRange: E
        };
        l.push(I);
        T.push(I);
      });
      c = T;
    }
    if (!u.isValid()) {
      return [];
    }
  }
  l.sort(we(j(g => g.modifiedLineRange.length, $)));
  let a = new k();
  let m = new k();
  for (let g of l) {
    let c = g.modifiedLineRange.startLineNumber - g.originalLineRange.startLineNumber;
    let b = a.subtractFrom(g.modifiedLineRange);
    let p = m.subtractFrom(g.originalLineRange).getWithDelta(c);
    let h = b.getIntersection(p);
    for (let T of h.ranges) {
      if (T.length < 3) {
        continue;
      }
      let E = T;
      let I = T.delta(-c);
      s.push(new q(I, E));
      a.addRange(E);
      m.addRange(I);
    }
  }
  s.sort(j(g => g.original.startLineNumber, $));
  let f = new G(i);
  for (let g = 0; g < s.length; g++) {
    let c = s[g];
    let b = f.findLastMonotonous(_ => _.original.startLineNumber <= c.original.startLineNumber);
    let p = M(i, _ => _.modified.startLineNumber <= c.modified.startLineNumber);
    let h = Math.max(c.original.startLineNumber - b.original.startLineNumber, c.modified.startLineNumber - p.modified.startLineNumber);
    let T = f.findLastMonotonous(_ => _.original.startLineNumber < c.original.endLineNumberExclusive);
    let E = M(i, _ => _.modified.startLineNumber < c.modified.endLineNumberExclusive);
    let I = Math.max(T.original.endLineNumberExclusive - c.original.endLineNumberExclusive, E.modified.endLineNumberExclusive - c.modified.endLineNumberExclusive);
    let x;
    for (x = 0; x < h; x++) {
      let _ = c.original.startLineNumber - x - 1;
      let L = c.modified.startLineNumber - x - 1;
      if (_ > t.length || L > r.length || a.contains(L) || m.contains(_) || !qe(t[_ - 1], r[L - 1], u)) {
        break;
      }
    }
    if (x > 0) {
      m.addRange(new v(c.original.startLineNumber - x, c.original.startLineNumber));
      a.addRange(new v(c.modified.startLineNumber - x, c.modified.startLineNumber));
    }
    let d;
    for (d = 0; d < I; d++) {
      let _ = c.original.endLineNumberExclusive + d;
      let L = c.modified.endLineNumberExclusive + d;
      if (_ > t.length || L > r.length || a.contains(L) || m.contains(_) || !qe(t[_ - 1], r[L - 1], u)) {
        break;
      }
    }
    if (d > 0) {
      m.addRange(new v(c.original.endLineNumberExclusive, c.original.endLineNumberExclusive + d));
      a.addRange(new v(c.modified.endLineNumberExclusive, c.modified.endLineNumberExclusive + d));
    }
    if (x > 0 || d > 0) {
      s[g] = new q(new v(c.original.startLineNumber - x, c.original.endLineNumberExclusive + d), new v(c.modified.startLineNumber - x, c.modified.endLineNumberExclusive + d));
    }
  }
  return s;
}
function qe(i, e, n) {
  if (i.trim() === e.trim()) {
    return true;
  }
  if (i.length > 300 && e.length > 300) {
    return false;
  }
  let r = new V().compute(new F([i], new R(0, 1), false), new F([e], new R(0, 1), false), n);
  let u = 0;
  let s = N.invert(r.diffs, i.length);
  for (let m of s) {
    m.seq1Range.forEach(f => {
      if (!J(i.charCodeAt(f))) {
        u++;
      }
    });
  }
  function o(m) {
    let f = 0;
    for (let g = 0; g < i.length; g++) {
      if (!J(m.charCodeAt(g))) {
        f++;
      }
    }
    return f;
  }
  let l = o(i.length > e.length ? i : e);
  return u / l > 0.6 && l > 10;
}
function un(i) {
  if (i.length === 0) {
    return i;
  }
  i.sort(j(n => n.original.startLineNumber, $));
  let e = [i[0]];
  for (let n = 1; n < i.length; n++) {
    let t = e[e.length - 1];
    let r = i[n];
    let u = r.original.startLineNumber - t.original.endLineNumberExclusive;
    let s = r.modified.startLineNumber - t.modified.endLineNumberExclusive;
    if (u >= 0 && s >= 0 && u + s <= 2) {
      e[e.length - 1] = t.join(r);
      continue;
    }
    e.push(r);
  }
  return e;
}
function on(i, e) {
  let n = new G(i);
  e = e.filter(t => {
    let r = n.findLastMonotonous(o => o.original.startLineNumber < t.original.endLineNumberExclusive) || new q(new v(1, 1), new v(1, 1));
    let u = M(i, o => o.modified.startLineNumber < t.modified.endLineNumberExclusive);
    return r !== u;
  });
  return e;
}
function de(i, e, n) {
  let t = n;
  t = Be(i, e, t);
  t = Be(i, e, t);
  t = ln(i, e, t);
  return t;
}
function Be(i, e, n) {
  if (n.length === 0) {
    return n;
  }
  let t = [];
  t.push(n[0]);
  for (let u = 1; u < n.length; u++) {
    let s = t[t.length - 1];
    let o = n[u];
    if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
      let l = o.seq1Range.start - s.seq1Range.endExclusive;
      let a;
      for (a = 1; a <= l && i.getElement(o.seq1Range.start - a) === i.getElement(o.seq1Range.endExclusive - a) && e.getElement(o.seq2Range.start - a) === e.getElement(o.seq2Range.endExclusive - a); a++);
      a--;
      if (a === l) {
        t[t.length - 1] = new N(new R(s.seq1Range.start, o.seq1Range.endExclusive - l), new R(s.seq2Range.start, o.seq2Range.endExclusive - l));
        continue;
      }
      o = o.delta(-a);
    }
    t.push(o);
  }
  let r = [];
  for (let u = 0; u < t.length - 1; u++) {
    let s = t[u + 1];
    let o = t[u];
    if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
      let l = s.seq1Range.start - o.seq1Range.endExclusive;
      let a;
      for (a = 0; a < l && !!i.isStronglyEqual(o.seq1Range.start + a, o.seq1Range.endExclusive + a) && !!e.isStronglyEqual(o.seq2Range.start + a, o.seq2Range.endExclusive + a); a++);
      if (a === l) {
        t[u + 1] = new N(new R(o.seq1Range.start + l, s.seq1Range.endExclusive), new R(o.seq2Range.start + l, s.seq2Range.endExclusive));
        continue;
      }
      if (a > 0) {
        o = o.delta(a);
      }
    }
    r.push(o);
  }
  if (t.length > 0) {
    r.push(t[t.length - 1]);
  }
  return r;
}
function ln(i, e, n) {
  if (!i.getBoundaryScore || !e.getBoundaryScore) {
    return n;
  }
  for (let t = 0; t < n.length; t++) {
    let r = t > 0 ? n[t - 1] : undefined;
    let u = n[t];
    let s = t + 1 < n.length ? n[t + 1] : undefined;
    let o = new R(r ? r.seq1Range.endExclusive + 1 : 0, s ? s.seq1Range.start - 1 : i.length);
    let l = new R(r ? r.seq2Range.endExclusive + 1 : 0, s ? s.seq2Range.start - 1 : e.length);
    if (u.seq1Range.isEmpty) {
      n[t] = Ke(u, i, e, o, l);
    } else if (u.seq2Range.isEmpty) {
      n[t] = Ke(u.swap(), e, i, l, o).swap();
    }
  }
  return n;
}
function Ke(i, e, n, t, r) {
  let s = 1;
  while (i.seq1Range.start - s >= t.start && i.seq2Range.start - s >= r.start && n.isStronglyEqual(i.seq2Range.start - s, i.seq2Range.endExclusive - s) && s < 100) {
    s++;
  }
  s--;
  let o = 0;
  while (i.seq1Range.start + o < t.endExclusive && i.seq2Range.endExclusive + o < r.endExclusive && n.isStronglyEqual(i.seq2Range.start + o, i.seq2Range.endExclusive + o) && o < 100) {
    o++;
  }
  if (s === 0 && o === 0) {
    return i;
  }
  let l = 0;
  let a = -1;
  for (let m = -s; m <= o; m++) {
    let f = i.seq2Range.start + m;
    let g = i.seq2Range.endExclusive + m;
    let c = i.seq1Range.start + m;
    let b = e.getBoundaryScore(c) + n.getBoundaryScore(f) + n.getBoundaryScore(g);
    if (b > a) {
      a = b;
      l = m;
    }
  }
  return i.delta(l);
}
function ke(i, e, n) {
  let t = [];
  for (let r of n) {
    let u = t[t.length - 1];
    if (!u) {
      t.push(r);
      continue;
    }
    if (r.seq1Range.start - u.seq1Range.endExclusive <= 2 || r.seq2Range.start - u.seq2Range.endExclusive <= 2) {
      t[t.length - 1] = new N(u.seq1Range.join(r.seq1Range), u.seq2Range.join(r.seq2Range));
    } else {
      t.push(r);
    }
  }
  return t;
}
function Pe(i, e, n) {
  let t = N.invert(n, i.length);
  let r = [];
  let u = new A(0, 0);
  function s(l, a) {
    if (l.offset1 < u.offset1 || l.offset2 < u.offset2) {
      return;
    }
    let m = i.findWordContaining(l.offset1);
    let f = e.findWordContaining(l.offset2);
    if (!m || !f) {
      return;
    }
    let g = new N(m, f);
    let c = g.intersect(a);
    let b = c.seq1Range.length;
    let p = c.seq2Range.length;
    while (t.length > 0) {
      let h = t[0];
      if (!h.seq1Range.intersects(m) && !h.seq2Range.intersects(f)) {
        break;
      }
      let E = i.findWordContaining(h.seq1Range.start);
      let I = e.findWordContaining(h.seq2Range.start);
      let x = new N(E, I);
      let d = x.intersect(h);
      b += d.seq1Range.length;
      p += d.seq2Range.length;
      g = g.join(x);
      if (g.seq1Range.endExclusive >= h.seq1Range.endExclusive) {
        t.shift();
      } else {
        break;
      }
    }
    if (b + p < (g.seq1Range.length + g.seq2Range.length) * 2 / 3) {
      r.push(g);
    }
    u = g.getEndExclusives();
  }
  while (t.length > 0) {
    let l = t.shift();
    if (!l.seq1Range.isEmpty) {
      s(l.getStarts(), l);
      s(l.getEndExclusives().delta(-1), l);
    }
  }
  return an(n, r);
}
function an(i, e) {
  let n = [];
  while (i.length > 0 || e.length > 0) {
    let t = i[0];
    let r = e[0];
    let u;
    if (t && (!r || t.seq1Range.start < r.seq1Range.start)) {
      u = i.shift();
    } else {
      u = e.shift();
    }
    if (n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= u.seq1Range.start) {
      n[n.length - 1] = n[n.length - 1].join(u);
    } else {
      n.push(u);
    }
  }
  return n;
}
function Ve(i, e, n) {
  let t = n;
  if (t.length === 0) {
    return t;
  }
  let r = 0;
  let u;
  do {
    u = false;
    let o = [t[0]];
    for (let l = 1; l < t.length; l++) {
      let f = function (c, b) {
        let p = new R(m.seq1Range.endExclusive, a.seq1Range.start);
        return i.getText(p).replace(/\s/g, "").length <= 4 && (c.seq1Range.length + c.seq2Range.length > 5 || b.seq1Range.length + b.seq2Range.length > 5);
      };
      var s = f;
      let a = t[l];
      let m = o[o.length - 1];
      if (f(m, a)) {
        u = true;
        o[o.length - 1] = o[o.length - 1].join(a);
      } else {
        o.push(a);
      }
    }
    t = o;
  } while (r++ < 10 && u);
  return t;
}
function ze(i, e, n) {
  let t = n;
  if (t.length === 0) {
    return t;
  }
  let r = 0;
  let u;
  do {
    u = false;
    let l = [t[0]];
    for (let a = 1; a < t.length; a++) {
      let g = function (b, p) {
        let h = new R(f.seq1Range.endExclusive, m.seq1Range.start);
        if (i.countLinesIn(h) > 5 || h.length > 500) {
          return false;
        }
        let E = i.getText(h).trim();
        if (E.length > 20 || E.split(/\r\n|\r|\n/).length > 1) {
          return false;
        }
        let I = i.countLinesIn(b.seq1Range);
        let x = b.seq1Range.length;
        let d = e.countLinesIn(b.seq2Range);
        let _ = b.seq2Range.length;
        let L = i.countLinesIn(p.seq1Range);
        let y = p.seq1Range.length;
        let B = e.countLinesIn(p.seq2Range);
        let ae = p.seq2Range.length;
        let Re = 130;
        function Q(je) {
          return Math.min(je, Re);
        }
        return Math.pow(Math.pow(Q(I * 40 + x), 1.5) + Math.pow(Q(d * 40 + _), 1.5), 1.5) + Math.pow(Math.pow(Q(L * 40 + y), 1.5) + Math.pow(Q(B * 40 + ae), 1.5), 1.5) > (Re ** 1.5) ** 1.5 * 1.3;
      };
      var o = g;
      let m = t[a];
      let f = l[l.length - 1];
      if (g(f, m)) {
        u = true;
        l[l.length - 1] = l[l.length - 1].join(m);
      } else {
        l.push(m);
      }
    }
    t = l;
  } while (r++ < 10 && u);
  let s = [];
  Ie(t, (l, a, m) => {
    let f = a;
    function g(E) {
      return E.length > 0 && E.trim().length <= 3 && a.seq1Range.length + a.seq2Range.length > 100;
    }
    let c = i.extendToFullLines(a.seq1Range);
    let b = i.getText(new R(c.start, a.seq1Range.start));
    if (g(b)) {
      f = f.deltaStart(-b.length);
    }
    let p = i.getText(new R(a.seq1Range.endExclusive, c.endExclusive));
    if (g(p)) {
      f = f.deltaEnd(p.length);
    }
    let h = N.fromOffsetPairs(l ? l.getEndExclusives() : A.zero, m ? m.getStarts() : A.max);
    let T = f.intersect(h);
    if (s.length > 0 && T.getStarts().equals(s[s.length - 1].getEndExclusives())) {
      s[s.length - 1] = s[s.length - 1].join(T);
    } else {
      s.push(T);
    }
  });
  return s;
}
var W = class {
  constructor(e, n, t) {
    this.changes = e;
    this.moves = n;
    this.hitTimeout = t;
  }
};
var oe = class i {
  constructor(e, n) {
    this.lineRangeMapping = e;
    this.changes = n;
  }
  flip() {
    return new i(this.lineRangeMapping.flip(), this.changes.map(e => e.flip()));
  }
};
var Z = class {
  constructor(e, n) {
    this.trimmedHash = e;
    this.lines = n;
  }
  getElement(e) {
    return this.trimmedHash[e];
  }
  get length() {
    return this.trimmedHash.length;
  }
  getBoundaryScore(e) {
    let n = e === 0 ? 0 : We(this.lines[e - 1]);
    let t = e === this.lines.length ? 0 : We(this.lines[e]);
    return 1000 - (n + t);
  }
  getText(e) {
    return this.lines.slice(e.start, e.endExclusive).join(`
`);
  }
  isStronglyEqual(e, n) {
    return this.lines[e] === this.lines[n];
  }
};
function We(i) {
  let e = 0;
  while (e < i.length && (i.charCodeAt(e) === 32 || i.charCodeAt(e) === 9)) {
    e++;
  }
  return e;
}
var le = class {
  constructor() {
    this.dynamicProgrammingDiffing = new ie();
    this.myersDiffingAlgorithm = new V();
  }
  computeDiff(e, n, t) {
    if (e.length <= 1 && Ee(e, n, (d, _) => d === _)) {
      return new W([], [], false);
    }
    if (e.length === 1 && e[0].length === 0 || n.length === 1 && n[0].length === 0) {
      return new W([new z(new v(1, e.length + 1), new v(1, n.length + 1), [new Y(new S(1, 1, e.length, e[0].length + 1), new S(1, 1, n.length, n[0].length + 1))])], [], false);
    }
    let r = t.maxComputationTimeMs === 0 ? U.instance : new te(t.maxComputationTimeMs);
    let u = !t.ignoreTrimWhitespace;
    let s = new Map();
    function o(d) {
      let _ = s.get(d);
      if (_ === undefined) {
        _ = s.size;
        s.set(d, _);
      }
      return _;
    }
    let l = e.map(d => o(d.trim()));
    let a = n.map(d => o(d.trim()));
    let m = new Z(l, e);
    let f = new Z(a, n);
    let g = m.length + f.length < 1700 ? this.dynamicProgrammingDiffing.compute(m, f, r, (d, _) => e[d] === n[_] ? n[_].length === 0 ? 0.1 : 1 + Math.log(1 + n[_].length) : 0.99) : this.myersDiffingAlgorithm.compute(m, f);
    let c = g.diffs;
    let b = g.hitTimeout;
    c = de(m, f, c);
    c = Ve(m, f, c);
    let p = [];
    let h = d => {
      if (u) {
        for (let _ = 0; _ < d; _++) {
          let L = T + _;
          let y = E + _;
          if (e[L] !== n[y]) {
            let B = this.refineDiff(e, n, new N(new R(L, L + 1), new R(y, y + 1)), r, u);
            for (let ae of B.mappings) {
              p.push(ae);
            }
            if (B.hitTimeout) {
              b = true;
            }
          }
        }
      }
    };
    let T = 0;
    let E = 0;
    for (let d of c) {
      ne(() => d.seq1Range.start - T === d.seq2Range.start - E);
      let _ = d.seq1Range.start - T;
      h(_);
      T = d.seq1Range.endExclusive;
      E = d.seq2Range.endExclusive;
      let L = this.refineDiff(e, n, d, r, u);
      if (L.hitTimeout) {
        b = true;
      }
      for (let y of L.mappings) {
        p.push(y);
      }
    }
    h(e.length - T);
    let I = Ge(p, e, n);
    let x = [];
    if (t.computeMoves) {
      x = this.computeMoves(I, e, n, l, a, r, u);
    }
    ne(() => {
      function d(L, y) {
        if (L.lineNumber < 1 || L.lineNumber > y.length) {
          return false;
        }
        let B = y[L.lineNumber - 1];
        return L.column >= 1 && L.column <= B.length + 1;
      }
      function _(L, y) {
        return L.startLineNumber >= 1 && L.startLineNumber <= y.length + 1 && L.endLineNumberExclusive >= 1 && L.endLineNumberExclusive <= y.length + 1;
      }
      for (let L of I) {
        if (!L.innerChanges) {
          return false;
        }
        for (let y of L.innerChanges) {
          if (!d(y.modifiedRange.getStartPosition(), n) || !d(y.modifiedRange.getEndPosition(), n) || !d(y.originalRange.getStartPosition(), e) || !d(y.originalRange.getEndPosition(), e)) {
            return false;
          }
        }
        if (!_(L.modified, n) || !_(L.original, e)) {
          return false;
        }
      }
      return true;
    });
    return new W(I, x, b);
  }
  computeMoves(e, n, t, r, u, s, o) {
    return Fe(e, n, t, r, u, s).map(m => {
      let f = this.refineDiff(n, t, new N(m.original.toOffsetRange(), m.modified.toOffsetRange()), s, o);
      let g = Ge(f.mappings, n, t, true);
      return new oe(m, g);
    });
  }
  refineDiff(e, n, t, r, u) {
    let s = new F(e, t.seq1Range, u);
    let o = new F(n, t.seq2Range, u);
    let l = s.length + o.length < 500 ? this.dynamicProgrammingDiffing.compute(s, o, r) : this.myersDiffingAlgorithm.compute(s, o, r);
    let a = l.diffs;
    a = de(s, o, a);
    a = Pe(s, o, a);
    a = ke(s, o, a);
    a = ze(s, o, a);
    return {
      mappings: a.map(f => new Y(s.translateRange(f.seq1Range), o.translateRange(f.seq2Range))),
      hitTimeout: l.hitTimeout
    };
  }
};
function Ge(i, e, n, t = false) {
  let r = [];
  for (let u of Te(i.map(s => mn(s, e, n)), (s, o) => s.original.overlapOrTouch(o.original) || s.modified.overlapOrTouch(o.modified))) {
    let s = u[0];
    let o = u[u.length - 1];
    r.push(new z(s.original.join(o.original), s.modified.join(o.modified), u.map(l => l.innerChanges[0])));
  }
  ne(() => !t && r.length > 0 && r[0].original.startLineNumber !== r[0].modified.startLineNumber ? false : Se(r, (u, s) => s.original.startLineNumber - u.original.endLineNumberExclusive === s.modified.startLineNumber - u.modified.endLineNumberExclusive && u.original.endLineNumberExclusive < s.original.startLineNumber && u.modified.endLineNumberExclusive < s.modified.startLineNumber));
  return r;
}
function mn(i, e, n) {
  let t = 0;
  let r = 0;
  if (i.modifiedRange.endColumn === 1 && i.originalRange.endColumn === 1 && i.originalRange.startLineNumber + t <= i.originalRange.endLineNumber && i.modifiedRange.startLineNumber + t <= i.modifiedRange.endLineNumber) {
    r = -1;
  }
  if (i.modifiedRange.startColumn - 1 >= n[i.modifiedRange.startLineNumber - 1].length && i.originalRange.startColumn - 1 >= e[i.originalRange.startLineNumber - 1].length && i.originalRange.startLineNumber <= i.originalRange.endLineNumber + r && i.modifiedRange.startLineNumber <= i.modifiedRange.endLineNumber + r) {
    t = 1;
  }
  let u = new v(i.originalRange.startLineNumber + t, i.originalRange.endLineNumber + 1 + r);
  let s = new v(i.modifiedRange.startLineNumber + t, i.modifiedRange.endLineNumber + 1 + r);
  return new z(u, s, [i]);
}
async function cn(i, e, n) {
  let t = i.split(/\r\n|\r|\n/);
  let r = e.split(/\r\n|\r|\n/);
  let s = new le().computeDiff(t, r, n);
  let o = s.changes.length > 0 ? false : i === e;
  function l(a) {
    return a.map(m => [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, m.innerChanges?.map(f => [f.originalRange.startLineNumber, f.originalRange.startColumn, f.originalRange.endLineNumber, f.originalRange.endColumn, f.modifiedRange.startLineNumber, f.modifiedRange.startColumn, f.modifiedRange.endLineNumber, f.modifiedRange.endColumn])]);
  }
  return {
    identical: o,
    quitEarly: s.hitTimeout,
    changes: l(s.changes),
    moves: s.moves.map(a => [a.lineRangeMapping.original.startLineNumber, a.lineRangeMapping.original.endLineNumberExclusive, a.lineRangeMapping.modified.startLineNumber, a.lineRangeMapping.modified.endLineNumberExclusive, l(a.changes)])
  };
}
function fn() {
  let i = He.parentPort;
  if (!i) {
    throw new Error("This module should only be used in a worker thread.");
  }
  i.on("message", async ({
    id: e,
    fn: n,
    args: t
  }) => {
    try {
      let r = await _e[n](...t);
      i.postMessage({
        id: e,
        res: r
      });
    } catch (r) {
      i.postMessage({
        id: e,
        err: r
      });
    }
  });
}
fn();
//!!! DO NOT modify, this file was COPIED from 'microsoft/vscode'
