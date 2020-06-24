const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


  const double = (x) => x*2;

  console.log(double);