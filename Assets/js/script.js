const add = document.querySelector('.btn')


function myOrder() {
  alert ('YOUR ORDER HAS BEEN PLACED!')
}

function orderNow() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
  alert ('Thanks for placing your order!')
}


//Render One furniture
function renderOneFurniture(furniture) {
  //Build necessary furniture online shopping details
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <div class="container">
  <img src = "${furniture.imageurl}" height="250">
  <div class = 'content'>
  <h3> ${furniture.type} </h3>
  <p>
  <span class = 'price-value'> ${furniture.price} </span>
  <p>
  <p> ${furniture.location} </p>
  </div>
  </div>
  <button class="order" onclick="orderNow()">Order</button>

  `
  //Add furniture price, and necessary details to the DOM
  document.querySelector('#furniture-list').appendChild(card) 

}

//fetch furniture data
function getAllFurniture() {
  fetch('https://gideonlangat98.github.io/Online-Furniture-booking-system/db.json')
  .then(resp => resp.json())
  .then(furnitureData => furnitureData.furniture.forEach(furniture => renderOneFurniture(furniture)))
  .catch(err => console.error(err));
}

function initialize () {
  getAllFurniture()
}
initialize()