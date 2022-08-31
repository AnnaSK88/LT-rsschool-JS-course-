// TODO: create new branch for creating inheritance intBuilder and strBuilder

function BaseBuilder() { }



//ES-5
BaseBuilder.prototype.plus = function () { }
BaseBuilder.prototype.minus = function () { }
BaseBuilder.prototype.multiply = function () { }
BaseBuilder.prototype.divide = function () { }
BaseBuilder.prototype.remove = function () { }
BaseBuilder.prototype.sub = function () { }
BaseBuilder.prototype.get = function () { }
BaseBuilder.prototype.toString = function () { }
BaseBuilder.prototype.valueOf = function () { }



function StringBuilder(str) {
  BaseBuilder.call(this, str);
  this.str = str;

}
StringBuilder.prototype = Object.create(BaseBuilder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.toString = function () {
  return this.str;
}
StringBuilder.prototype.valueOf = function () {
  return this.str;
}
StringBuilder.prototype.plus = function (...str) {
  (this.str === undefined) ? (this.str = '' + str.join("")) :
    (this.str += str.join(""))
  return this
}

StringBuilder.prototype.minus = function (n) {
  this.str = this.str.slice(0, -n)
  return this
}
StringBuilder.prototype.multiply = function (int) {

  let repeatStr = "";
  while (int > 0) {
    repeatStr += this.str;
    int--;
  }
  this.str = repeatStr

  return this
}
StringBuilder.prototype.divide = function (n) {
  this.str = this.str.slice(0, (Math.floor(this.str.length / n)))
  return this
}

StringBuilder.prototype.remove = function (str) {
  this.str = this.str.substring(0, this.str.indexOf(str))
  return this;
}
StringBuilder.prototype.sub = function (from, n) {
  this.str = this.str.substring(from, from + n)
  return this
}
StringBuilder.prototype.get = function () {
  return this.str
}

const strBuilder = new StringBuilder('Hello')


//ES6

class IntBuilder extends BaseBuilder {

  plus(...n) {
    (this.n === undefined) ? (this.n = n.reduce((a, b) => a + b)) :
      (this.n += n.reduce((a, b) => a + b))
    return this;
  }
  minus(...n) {
    this.n = n.reduce((sum, current) => sum - current, this.n)
    return this
  }
  multiply(n) {
    this.n = this.n * n;
    return this
  }
  divide(n) {
    this.n = Math.floor(this.n / n);
    return this
  }
  mod(n) {
    this.n = this.n % n;
    return this
  }
  get() {
    return this.n;
  }
  static random(from, to) {
    this.n = Math.floor(Math.random() * (from - to) + to);
    return this.n
  }

  toString() {
    return this.n;
  }


}
const intBuilderNew = new IntBuilder(10)

console.log(intBuilderNew instanceof BaseBuilder)//true
console.log(strBuilder instanceof BaseBuilder)//true
