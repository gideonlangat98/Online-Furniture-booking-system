//style furniture order form
function orderNow() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//Event Listeners
document.querySelector('#form-container').addEventListener('submit', handleSubmit)

//EventHandlers
function handleSubmit(e) {
  e.preventDefault()
  let furnitureObj = {
    imageurl: e.target.imageurl.value,
    price: e.target.price.value,
    type: e.target.type.value,
    location: e.target.location.value
  }
  renderOneFurniture(furnitureObj)
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
  <button class="order" onclick="orderNow()">Order</button>
  `
  //Add furniture price, and necessary details to the DOM
  document.querySelector('#furniture-list').appendChild(card) 

}

//fetch furniture data
function getAllFurniture() {
  fetch('http://localhost:3000/Furniture')
  .then(resp => resp.json())
  .then(furnitureData => furnitureData.forEach(furniture => renderOneFurniture(furniture)))
}

function initialize () {
  getAllFurniture()
}
initialize()