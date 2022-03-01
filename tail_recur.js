
function arrSum(array, size, sum = 0)
{
    
    if (size == 0)
        return sum;
 
  
    return arrSum(array, size - 1, sum + array[size - 1]);
}
 
var array = [2, 55, 1, 7];
var size = array.length;
console.log(arrSum(array,size));
