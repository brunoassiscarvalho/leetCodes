const infiniteLoop = (arr, d, n) => {
  while (n--) {
    arr.forEach((val, idx) =>
      d === `left` ? val.push(arr[++idx % arr.length].shift()) : arr[++idx % arr.length].unshift(val.pop()));
  }
  return arr;
};