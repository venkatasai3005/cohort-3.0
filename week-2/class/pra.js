// let fs = require("fs");

// function print(err,data){
//   console.log(data)
// }
// function h(){
//   console.log("hi")
// }
// fs.readFile("a.txt", "utf-8",print)
// setTimeout(h,5000)
// let b=fs.readFileSync("c.txt","utf-8")
// console.log(b)
// fs.readFile("b.txt", "utf-8",print)
// console.log("hi")
// let c=0;
// for (let i=0;i<1000000000;i++){
//   c++
// }
// console.log("ho")
// let s=fs.readFileSync("c.txt","utf-8")
// console.log(s)

let a = 0;
function timer(){
  a=a+1;
  console.clear()
  console.log(a);
  setTimeout(timer,1000);
}
setTimeout(timer,1000);
