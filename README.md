# FETCH() API | CoinGecko Data to HTML Table View 

This application serves to fetch() data from CoinGecko's API and output the data to HTML page. It is built upon my onClick() microfrontend example file that illustrates the use of button transitions and onclick event triggers.

The URL used for the call example is: [CoinGecko API Call](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2C%20bitcoin%2C%20ethereum%2C%20polkadot%2C%20ripple%2C&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h)

## To View The Project

In the file folder, find the file named: 'index.html'.

Double click the index.html file to open it in the browser.

## Using Fetch() API

[MOZILLA Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[MOZILLA Using Fetch() Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Fetch() takes a manditory argument which is the 'path' to the resource you want to fetch.

- Promise: the promise is returned from the fetch() method as a 'response'
- Response: the response object will contain a representation of the entire HTTP response which requires the json() method to extract the content
- JSON(): using the json() method will resolve the promise by parsing the response body text as JSON 

## Fetch() Request Examples 

The most common approach to fetch data is using lambda arrow functions.

```js
fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Another method is to build the request and response using standard variable initializations.

```js
const response = await fetch(coingeckoURL);
const data = await response.json();
console.table(data);
```