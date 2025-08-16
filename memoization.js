function square(n) {
  return n * 10;
}

const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args.toString()]) {
      console.log(cache);
      return cache[args.toString()];
    }
    const results = fn(...args);
    cache[args.toString()] = results;
    return results;
  };
};
const memomized = memoize(square);
console.log(memomized(30));
