fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const countriesUsingUSD = data.filter(country => {
      return country.currencies && country.currencies.USD != null;
    });

    console.log("Countries that use US dollars (USD) as currency:");
    countriesUsingUSD.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
