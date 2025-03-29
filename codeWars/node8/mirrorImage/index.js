function mirrorImage(arr) {
  //coding here...
  let response = []

  return arr.some((element, index) => {
    response = [element, arr[index + 1]]
    return String(element) === String(arr[index + 1]).split("").reverse().join("")
  }) ? response : [-1, -1]

}