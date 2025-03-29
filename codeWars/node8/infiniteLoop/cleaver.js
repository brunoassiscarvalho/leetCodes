function infiniteLoop(arr,d,n){
  
  var len = arr.length;
  while(n--){
    for(var i=0;i<len;i++){
      if(d === "left") arr[i].push( arr[(i+1)%len].shift() ) 
      if(d === "right") arr[(i+1)%len].unshift( arr[i].pop() );
    }
  }

  return arr;
  
}