const myarr = [12,23,34,45,56,78,89,96];
const target = 101
let sum = 0
let index1 = 0
let index2 = 0
let result = [];

// function checksum (myarr,target){
//     for (i=0;i<myarr.length;i++){
//         for(j=i+1; j < myarr.length;j++){
//             sum = myarr[i] + myarr[j]
//             if (sum == target){
//                 index1 = i
//                 index2 = j
//                 return [index1 , index2]
//             }
//         }
//     }
//     return -1
// }

function checksumOptimised (myarr,target){
    let i = 0
    let j = myarr.length - 1
    
    while (i<j){
        sum = myarr[i] + myarr[j]
        if (sum == target){
            index1 = i
            index2 = j
            return [index1,index2]
        } else {
            i ++
            j --
        }
    }
    return -1
}

result = checksumOptimised(myarr,target)
if (result != -1){
    console.log(`Two numbers that add up to ${target} are at indexes ${result}` )
} else {
    console.log("Two numbers not found")
}

