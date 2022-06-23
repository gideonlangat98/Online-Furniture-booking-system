function renderOneFurniture(furniture) {
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
  <img src = "${furniture.imageUrl}">
  <div class = 'content'>
  <h3> $(furniture.name </h3>)

  <p>
  $<span class = 'price-value'> ${furniture.price} </span> 50,000 
  <p>
  <p> ${furniture.description} </p>
  </div>

  <div class = "button">
  <button> Buy Now </button>
  <button> Order </button>
  </div>
  `
  document.querySelector('#furniture-list').appendChild(card) 
}




