function flat(array) {
  let result = [];
  let main = array, first;
  while (main.length > 0) {
    first = main[0];
    if (Array.isArray(first)) {
      array.splice.apply(main, [0, 1].concat(first));
    } else {
      result.push(first);
      main.splice(0, 1);
    }
  }
  return result;
}

console.log(flat([[1], [2], 3, 4, [5, [6]]]));