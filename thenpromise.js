const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = Math.random() < 0.5 ? 'Success Data' : 'Error Data';
        if (data.includes('Error')) {
          reject(`Error: ${data}`);
        } else {
          resolve(data);
        }
      }, 1000);
    });
  };
  
  fetchData()
    .then(result => {
      console.log('Success:', result);
      return result.toUpperCase();
    })
    .then(uppercasedResult => {
      console.log('Uppercased Result:', uppercasedResult);
    })
    .catch(error => {
      console.error('Error:', error);
    });

console.log("Whatever");