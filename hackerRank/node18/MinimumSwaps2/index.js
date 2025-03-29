const testCase1 = {array:[7, 1, 3, 2, 4, 5, 6], value:5};
const testCase2 = {array:[4, 3, 1, 2], value:3};
const testCase3 = {array:[2, 3, 4, 1, 5], value:3};
const testCase4 = {array:[2,3,4,1,5], value:3};
const testCase5 = {array:[1, 3, 5, 2, 4, 6, 7], value:3};
const testCase6 = {array:[2,31,1,38,29,5,44,6,12,18,39,9,48,49,13,11,7,27,14,33,50,21,46,23,15,26,8,47,40,3,32,22,34,42,16,41,24,10,4,28,36,30,37,35,20,17,45,43,25,19],value:46};

function minimumSwaps(arr) {
  let minSwaps = 0, index = 0;
  while (index < arr.length) {
    const currentValue = parseInt(arr[index])
    const currentRealPosition = currentValue - 1;
    if (currentValue !== index + 1) {
      arr[index] = arr[currentValue - 1];
      arr[currentRealPosition] = currentValue;
      minSwaps++;
    } else {
      index++;
    }
  }
  return minSwaps;
}

console.log(minimumSwaps(testCase6.array))// 3

