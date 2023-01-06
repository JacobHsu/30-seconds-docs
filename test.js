const indexOfAll = (arr, val) => {
  const fn = (acc, el, i) => {
    // console.log(el, val, acc);
    return el === val ? [...acc, i] : acc;
  };
  return arr.reduce(fn, []);
};

const res = indexOfAll([1, 2, 3, 1, 2, 3], 1);
console.log('res:', res);
