const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


  const double = (x) => x*2;

console.log(double(2));

const time = () => new Date().toLocaleTimeString()

console.log(time());

const isGreaterThan = (value, comparison) => value > comparison

console.log(isGreaterThan(8,6))