fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => {
      return accumulator + country.population;
    }, 0);

    console.log("Total population of all countries: " + totalPopulation);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
