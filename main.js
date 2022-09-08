// Global Scope Variables *******************************
var tableDataArray = [];
const coingeckoURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin%2C%20bitcoin%2C%20ethereum%2C%20polkadot%2C%20ripple%2C&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h";
const cryptoTableHeaders = {
  col_1: "Name",
  col_2: "Price",
  col_3: "24-hr",
};
// *******************************************************

document.getElementById("show-more").onclick = buildTable;
document.getElementById("text-search").onkeyup = filterTable;

// API fetch() -> CoinGecko Cryptcurrency Data
async function fetchData() {
  const response = await fetch(coingeckoURL);
  return await response.json();
}

// Called from HTML button to fetch() api data
// and build the data table of cryptocurrency prices
async function buildTable() {
  const data = await fetchData(); // Call to CoinGecko API
  const table = document.getElementById("crypto-table");
  buttonSwitch(); // change button wording
  tableHeaders(); // set the table headers
  tableDataArray = data; // Save CoinGecko data to local array

  clearObjectInnerHTML(table);
  for (const key in data) {
    table.innerHTML += tableInnerHTML(key, data);
  }
}

// Opens or Closes the table view based on
// event 'click' and updates button text
function buttonSwitch() {
  const button = document.querySelector("#show-more");
  const cryptoTable = document.querySelector("#crypto-table-header");

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

// Builds the table column headers [ Name, Price, 24-hr ]
function tableHeaders() {
  const tableHeaders = document.getElementById("table-headers");
  clearObjectInnerHTML(tableHeaders);

  for (const key in cryptoTableHeaders) {
    tableHeaders.innerHTML += `<th>${cryptoTableHeaders[key]}</th>`;
  }
}

// Table is filtered based on user input text.
function filterTable() {
  const textInput = document.querySelector("#text-search");
  const newTable = document.querySelector("#crypto-table");
  clearObjectInnerHTML(newTable);

  for (const key in tableDataArray) {
    if (tableDataArray[key].name.includes(textInput.value)) {
      newTable.innerHTML += tableInnerHTML(key, tableDataArray);
    }
  }
}

// Returns a table row of data as an html string.
// Arguments: loop index, fetched json data
function tableInnerHTML(index, data) {
  return `<tr>
      <td>${data[index].name}</td>
      <td>$${parseFloat(data[index].current_price).toFixed(2)}</td>
      <td>$${parseFloat(data[index].price_change_24h).toFixed(4)}</td>
    </tr>`;
}

function clearObjectInnerHTML(htmlObject) {
  htmlObject.innerHTML = "";
}
