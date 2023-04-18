let n=33;
let i=n;
let ans=0
while(i){ /// 0 is false....
  let m=i%19;
  i=Math.floor(i/5);
  ans=ans*10+m;
}
if(ans==n){
  console.log("palin")
}else {
  console.log("not!!")
}