//Render One furniture

function renderOneFurniture(furniture) {
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <img src = "${furniture.imageurl}">
  <div class = 'content'>
  <h3> ${furniture.Description} </h3>

  <p>
  <span class = 'price-value'> ${furniture.price} </span>
  <p>
  <p> ${furniture.Description} </p>
  </div>

  <div class = "button">
  <button> Buy Now </button>
  <button> Order </button>
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


