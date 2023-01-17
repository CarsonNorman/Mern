function sort(arr, first, second){
    let temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

function bubble(arr){
    let len= arr.length
    for(let i =0; i < len; i++){
        for(let j = 0; j < len - i; j++){
            if(arr[j] > arr[j + 1]){
                sort(arr, j, j+1)
            }
        }
    }
    return arr
}

