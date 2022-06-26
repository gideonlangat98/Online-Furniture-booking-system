// const form = document.getElementById("#form-container")
const add = document.querySelector('.btn')

// //style furniture order form
// function orderNow() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
//   alert('Thanks for placing your order!')
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   alert('Your order has been successfully placed!')
//   form.request()
// })

function myOrder() {
  alert ('THANKS FOR PLACING YOUR FURNITURE ORDER, YOU WILL RECEIVE AN EMAIL CONFIRMATION SHORTLY!')
}

function orderNow() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
  alert ('Thanks for placing your order!')
}

//Event Listeners
document.querySelector('#form-container').addEventListener('submit', handleSubmit)

//EventHandlers
function handleSubmit(e) {
  e.preventDefault()
  let furnitureObj = {
    Name: e.target.Name.value,
    phoneNumber: e.target.phoneNumber.value,
    furnitureName: e.furnitureName.value,
    Location: e.target.Location.value
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
  <img src = "${furniture.imageurl}" height="200">
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
  .catch(err => console.error(err));

}

//POST
function addToCart(orderForm) {
  fetch('http://localhost:3000/Furniture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderForm)
  })
  .then((resp) => resp.json())
  .then(furnitureData => console.log(furnitureData))
}

function initialize () {
  getAllFurniture()
}
initialize()