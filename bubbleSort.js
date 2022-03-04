function bubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        var isSwapped = false
       // console.log(isSwapped)
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length-i- 1); j++) {
            // Check if the current element is greater than the next element
            
            console.log("i : "+i+" j: "+j)
            
            if (inputArray[j] > inputArray[j + 1]) {
                // If the condition is true then swap them
               
                var temp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
                isSwapped = true
               // console.log(inputArray)
               console.log(inputArray)
            }
        }
        if (!isSwapped)
        //console.log(inputArray)
            break
    }
    return inputArray
}
console.log(bubbleSort([231,45,631,46,2,5621]))
