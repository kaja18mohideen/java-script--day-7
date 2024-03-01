fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const name = country.name.common;
      const capital = country.capital[0];
      const flag = country.flags.svg;

      console.log("Name: " + name);
      console.log("Capital: " + capital);
      console.log("Flag: " + flag);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
