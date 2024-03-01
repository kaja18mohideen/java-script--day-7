fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);

    console.log("Countries with population less than 200,000:");
    countriesWithLowPopulation.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
