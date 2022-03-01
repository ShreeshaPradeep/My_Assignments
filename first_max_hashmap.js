var max=-1;
function first_max(arr){
    const map1 = new Map();
   
    for(let i=0;i<arr.length;i++){
        
        if(isNaN(map1.get(arr[i])))
        {
            map1.set(arr[i],0);
        }
        map1.set(arr[i],map1.get(arr[i])+1);

        if(map1.get(arr[i]) == 2)
        {
           console.log(arr[i]);
           return;
        }

    }
    
    console.log(map1)
}


first_max("aaaabb")
