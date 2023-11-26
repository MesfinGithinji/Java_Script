
const person = {
    name : "Mesh",
    age : 26,
    gender: "Male",
    
}

const jobOject = {
    occupation : "Senior Software Engineer",
    salary : 450000 
}
//to get all the object keys
console.log("These are the keys: " + Object.keys(person))

//to get all the values
console.log("\nThese are the values: "+ Object.values(person))

//to get all the object entries
console.log("\nThese are the entries of the object: "+ Object.entries(person))

console.log("\nBefore assigning entries from another object")
console.log(person)

//we can also assign an object to another object
//lets assign the jobObject to the person object
Object.assign(person,jobOject)
console.log("\nAfter assigning entries from another object")
console.log(person)
