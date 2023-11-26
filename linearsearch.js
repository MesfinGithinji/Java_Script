const myarr = [12,23,34,45,56,78,89,96];
const target = 56

function linearSearch (arr,target) {
    for(i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

const result = linearSearch(myarr,target)

if (result != -1){
    console.log(`Target found at index: ${result}`)
} else {
    console.log("Target not found")
}