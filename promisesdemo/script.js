document.addEventListener('DOMContentLoaded', () => {
  const loadDataBtn = document.getElementById('loadDataBtn');
  const resultDiv = document.getElementById('result');

  loadDataBtn.addEventListener('click', () => {
    fetchCatFact()
      .then((fact) => {
        resultDiv.textContent = fact;
      })
      .catch((error) => {
        resultDiv.textContent = `Error: ${error}`;
      });
  });

  function fetchCatFact() {
    return new Promise((resolve, reject) => {
      fetch('https://catfact.ninja/fact')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch cat fact');
          }
          return response.json();
        })
        .then((data) => {
          resolve(data.fact);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }
});
