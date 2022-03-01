array=[0,3,-4,6,78,45,-34,67,2,1,-56];
function positive_negative(arr)
{
    negative = [];
positive = [];
for(let i=0;i<arr.length;i++){
  if(arr[i]<0){
      negative.push(arr[i]);
  }
  else if(arr[i]>=0){
      positive.push(arr[i])
  }
}
return negative.sort(function(a, b){return a - b}) +","+ positive.sort(function(a, b){return a - b});


}
console.log(positive_negative(array));
