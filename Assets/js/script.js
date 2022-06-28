//My code
//Adding event listener to shop button
document.querySelector('#btn3').addEventListener('click', () => {
    alert('Shop your favorite furniture below by clicking the order button!')
})

function orderNow() {
  document.getElementById("myForm").style.display = "block";
}

function myOrder() {
  alert ('YOUR ORDER HAS BEEN PLACED!')
}

document.querySelector('.pay').addEventListener('click', () =>{
  alert ('DEAR CUSTOMER, PAY YOUR FURNITURE COLLECTION THROUGH OUR SITES PAYBILL POINT!')
})

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
  <img src = "${furniture.imageurl}" height="230">
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
  fetch('  http://localhost:3000/furniture')
  
  .then(resp => resp.json())
  .then(furnitureData => furnitureData.forEach(furniture => renderOneFurniture(furniture)))
  .catch(err => console.error(err));
}


function initialize (){
  getAllFurniture()
}
initialize()





