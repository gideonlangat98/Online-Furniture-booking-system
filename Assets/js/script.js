const add = document.querySelector('.btn')

//Add event listener to product nav bar link to bring about drop down
function expand() {
  if (this.parentNode.getElementsByTagName('ul')[0].style.display == 'block') {
    return this.parentNode.getElementsByTagName('ul')[0].style.display = 'none'
    }
    this.parentNode.getElementsByTagName('ul')[0].style.display = 'block'
};

var anchor_arr = document.getElementsByClassName('expandable');
for(let i = 0; i<anchor_arr.length; i++) {
  anchor_arr[i].addEventListener('click', expand, false);
}

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
  fetch('http://localhost:3000/furniture')
  .then(resp => resp.json())
  .then(furnitureData => furnitureData.forEach(furniture => renderOneFurniture(furniture)))
  .catch(err => console.error(err));
}

function initialize () {
  getAllFurniture()
}
initialize()