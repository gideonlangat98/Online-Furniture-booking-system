//
const but = document.getElementById('#btn2').click();
const buttn = document.getElementById('#btn3')

function myFunction(e) {
  if (e === 'click')
  but.addEventListener('click')
  alert('Youareintherightcohort')
}
myFunction(e);




//Render One furniture
function renderOneFurniture(furniture) {
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

  <div class = "button">
  <button id="order"> Order </button>
</div>
  `
  document.querySelector('#furniture-list').appendChild(card) 

}

function getAllFurniture() {
  fetch('http://localhost:3000/Furniture')
  .then(resp => resp.json())
  .then(furnitureData => furnitureData.forEach(furniture => renderOneFurniture(furniture)))
}

function initialize () {
  getAllFurniture()
}
initialize()
