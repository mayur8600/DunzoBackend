function runProgram(input) {
  var newInput = input.split("\n");
  var t = newInput[0];
  for(a = 1; a <=t; a++){
  var data = newInput[a].split(" ").map(Number);  
   function fun(l, h, k){
   	
     if(low <= high){
       mid = Math.floor(low + (high - low)/2);
     	if((mid*mid <= k) && ((mid+1)*(mid+1))> k){
        	return mid
        }
           else if(mid * mid < k){
           	return fun(mid + 1, h, k)
           }
           else{
           	return fun(l, mid - 1, k)
           }
     }
       else{
       	return l
       }
   }
    console.log(fun(low, high, data))
  }
    
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
        read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});