var productList = [];

function addProduct() {
  var productInput = document.getElementById("productInput");
  var product = productInput.value;
  
  if (product.trim() !== "") {
    productList.push(product);
    productInput.value = "";
    renderList();
  }
}

function renderList() {
  var productListElement = document.getElementById("productList");
  productListElement.innerHTML = "";
  
  for (var i = 0; i < productList.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = productList[i];
    listItem.onclick = function() {
      this.classList.toggle("selected");
    };
    
    productListElement.appendChild(listItem);
  }
}

function saveList() {
  var listString = productList.join("\n");
  localStorage.setItem("shoppingList", listString);
  alert("List saved successfully!");
}

function printList() {
  var listString = productList.join("\n");
  var printWindow = window.open("", "_blank");
  printWindow.document.write("<pre>" + listString + "</pre>");
  printWindow.document.close();
  printWindow.print();
}
const express = require('express');
const helmet = require('helmet');

const app = express();

// Add the helmet middleware to set security-related headers
app.use(helmet({
  permissionsPolicy: {
    interestCohort: [],
  },
}));

// Define your routes and other middleware

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});