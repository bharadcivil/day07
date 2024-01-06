var details = new XMLHttpRequest();
details.open("GET", "https://restcountries.com/v3.1/all", true);
details.send();
details.onload = function () {
  if (details.status === 200) {
    var data = details.responseText; 
    var countries = JSON.parse(data);
 var countriesInAsia = countries.filter(function (country) {
      return country.region === "Asia";
    });
    console.log(countriesInAsia);
  }
};

//b
var details = new XMLHttpRequest();
details.open("GET", "https://restcountries.com/v3.1/all", true);
details.send();

details.onload = function () {
  if (details.status === 200) {
    var data = details.responseText; 
    var countries = JSON.parse(data);
 var countriesInAsia = countries.filter(function (country) {
      return country.region === "Asia";
    });

    console.log(countriesInAsia);
  }
};

//c
var details = new XMLHttpRequest();
details.open("GET", "https://restcountries.com/v3.1/all", true);
details.send();

details.onload = function () {
  if (details.status === 200) {
    var data = details.responseText;
    var countries = JSON.parse(data);
 countries.forEach(function (country) {
      console.log("Name: " + country.name.common);
      console.log("Capital: " + country.capital[0]);
      console.log("Flag: " + country.flags.png);
      console.log("---------");
    });
  }
};

//d
var details = new XMLHttpRequest();
details.open("GET", "https://restcountries.com/v3.1/all", true);
details.send();

details.onload = function () {
  if (details.status === 200) {
    var data = details.responseText;
    var countries = JSON.parse(data);
    var totalPopulation = countries.reduce(function (accumulator, country) {
      return accumulator + country.population;
    }, 0);
    console.log("Total Population: " + totalPopulation);
  }
};

//e
var details = new XMLHttpRequest();
details.open("GET", "https://restcountries.com/v3.1/all", true);
details.send();

details.onload = function () {
  if (details.status === 200) {
    var data = details.responseText;
    var countries = JSON.parse(data);
    var countryWithUSD = countries.find(function (country) {
        return country.currencies[0] === "USD";
      });
      if (countryWithUSD) {
        console.log(countryWithUSD.name.common);
      } else {
       
      }
    }
  };