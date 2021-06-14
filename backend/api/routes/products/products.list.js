const express = require('express');
const Product = require('./product.model');
const queries = require('./products.queries');

const getTableBody = document.querySelector('#tableBody'); // Gets the ID of the table in prep for data insertion

  fetch('/api/routes/products')
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function(json) {
    document.querySelector('#totalProducts').textContent = json.length; // Added +1 due to prod_id starting from 1, else returns 170 products and may confuse non-technical users'
    console.log(json);
    for (let product of json) { // Iterates through each returned product
      //console.log(product);
      //console.log(product.prod_id);
  
      // Populates an individual TD with its respective returned .json data
      let newTableRow = getTableBody.appendChild(document.createElement('tr'));
      newTableRow.appendChild(document.createElement('td')).textContent = product.prod_id;
      newTableRow.appendChild(document.createElement('td')).textContent = product.prod_name;
      newTableRow.appendChild(document.createElement('td')).textContent = product.prod_brand;
      newTableRow.appendChild(document.createElement('td')).textContent = product.prod_price;
      newTableRow.appendChild(document.createElement('td')).textContent = product.is_available;
      newTableRow.appendChild(document.createElement('td')).textContent = product.available_quantity;
      newTableRow.appendChild(document.createElement('td')).textContent = product.location;
  
    }
  });