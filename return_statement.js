#!/usr/bin/env node

for (let i=0; i<10; i++) {

	if(i === 6){
	   return;
	} 

	console.log(i); 
}

const myArr = [1,2,3,4,5];
const myVal = [...myArr];
console.log(myVal);
