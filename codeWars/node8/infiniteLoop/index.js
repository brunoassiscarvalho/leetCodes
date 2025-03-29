export function infiniteLoop(arr, d, n) {
  //coding here...



  const shiffitedArray = arr.reduce((flatArray, element) => {
    flatArray.push(...element)
    return flatArray
  }, [])

  const shiffitValue = n % shiffitedArray.length || n / shiffitedArray.length;


  for (let count = 0; count < shiffitValue; count++) {
    if (d === "left") {
      shiffitedArray.push(shiffitedArray.shift());
    } else if (d === "right") {
      shiffitedArray.unshift(shiffitedArray.pop());
    }
  }

  let newArr = []

  let arrCount = 0
  for (const element of arr) {
    const insideArray = element

    let subArray = []
    // console.log(insideArray.length)
    for (const element of insideArray) {
      subArray.push(shiffitedArray[arrCount]);
      arrCount++;
    }
    newArr.push(subArray)
  }
  console.log(newArr)

  //   return shiffitedArray;
  return newArr;
}




