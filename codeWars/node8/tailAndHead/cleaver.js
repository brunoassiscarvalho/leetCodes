function tailAndHead(arr){
  return arr.reduce((a,b,i)=>a*(+((arr[i]+"")[0])+(arr[i-1]%10)))/arr[0];
}