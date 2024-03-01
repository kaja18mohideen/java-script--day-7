fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');

    console.log("Countries in Asia:");
    asiaCountries.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
