# FETCH() API | CoinGecko Data to HTML Table View 

This micro application illustrates the basic method of fetching a data object, JSON in this case, from an API. The API used in this application is: [CoinGecko API Coins by 'id'](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2C%20bitcoin%2C%20ethereum%2C%20polkadot%2C%20ripple%2C&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h)

Another method used in this application is the "onClick()" event. An older method of handling on click events used a function call within the HTML to the corresponding JavaScript function. Today, events are handled within the JavaScript code using event listeners. When an event occurs, such as clicking on a button, it is JavaScripts job to handle the event for that HTML element.

## To View Or Download The Project

[fetch(): GitHub Repo](https://github.com/hickamt/fetch_api_coingecko);
[onClick(): GitHub Repo](https://github.com/hickamt/onClick_cryptoTable_with_transitions)

Download the directory > open the index.html at ./root > serve 'index.html' using the VSCode extension 'Live Serve'.

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

## HTML & JS Fetch() Options

[GeeksForGeeks: Overview of Event Listner](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/)

You can set up an onClick() event in many ways. Two methods that I have used are:

- Traditional in HTML: call your JavaScript method directly from the HTML page. When the event is triggered, the corresponding method is called.

```html
<button id="show-more" onclick="buildTable()">Show Table</button>
```

- Modern Event Listner: the JavaScript method is 'actively listening' for the event to occur.

```html
<button id="show-more" >Show Table</button>
```
```js
// method used in the application
document.querySelector("#show-more").onclick = buildTable;

// another method of immediately handling the event using Lambda Function
button.addEventLister("click", () => {
  //Handle the event, with one or more actions
})
```
