function twosum(numbers,target){
  const numbersMap = new Map();

  for (let i=0; i<numbers.length; i++){
    const complement = target - numbers[i];

    if (numbersMap.has(complement)){
      return [numbersMap.get(complement),i];
    }

    numbersMap.set(numbers[i],i);
  }
  throw new Error("Numbers Not Found");
}

const numbers = [2,7,11,15];
const target = 1;

try {
  const result = twosum(numbers,target);
  console.log("The indexes of the two numbers are: ",result[0],result[1]);
} catch (error){
  console.error(error.message);
}
