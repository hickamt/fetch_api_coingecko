
// Global Scope Variables *******************************
const coingeckoURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2C%20bitcoin%2C%20ethereum%2C%20polkadot%2C%20ripple%2C&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h";
var cryptoHeaders = ["Name", "Price", "24-hr"];
var button = document.querySelector("#show-more");
var cryptoTable = document.querySelector("#crypto-table");
var tableFlag = true;
// *******************************************************

// Event triggers the table build
button.onclick = function () {
  buttonSwitch();

  if (tableFlag) {
    buildTable();
    tableFlag = false;
  }
};

// Handling Table View Open/Close
function buttonSwitch() {
  if (cryptoTable.className == "open") {
    //shrink the box
    cryptoTable.className = "";
    button.innerHTML = "Show  Table";
  } else {
    //expand the box
    cryptoTable.className = "open";
    button.innerHTML = "Hide  Table";
  }
}

async function buildTable() {
  tableHeaders();
  const data = await fetchData();

  var table = document.getElementById("myTable");
  for (var i = 0; i < data.length; ++i) {
    table.innerHTML += `<tr>
      <td>${data[i].name}</td>
      <td>${data[i].current_price}</td>
      <td>${data[i].price_change_24h}</td>
    </tr>`;
  }
}

// Builds the table column headers [ Name, Price, 24-hr ]
function tableHeaders() {
  var headers = document.getElementById("table-headers");

  for (var i = 0; i < cryptoHeaders.length; ++i) {
    headers.innerHTML += `<th>${cryptoHeaders[i]}</th>`;
  }
}

// Simple fetch() to get CoinGecko Data
async function fetchData() {
  const response = await fetch(coingeckoURL);
  return await response.json();
}
