
// Get the modal for cart
var modal = document.getElementById("myModal");
var btn = document.getElementById("cartBtn");
var span = document.querySelector('.close');

btn.addEventListener('click',()=>{
  modal.style.display = "block";
})

span.addEventListener('click',()=>{
  modal.style.display ="none"
})

window.addEventListener('click',()=>{
  if (event.target == modal) {
    modal.style.display = "none";
  }
})


let addButtons = document.querySelectorAll('.addButton');
let cartNum = document.querySelector('.cartNum');
let itemsdiv = document.querySelector('.items')

const cart = []

// grabbing values from DOM for each product
addButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const Product = e.target.parentElement.children
         let  productName = Product[1].innerText;
         let  price = Product[2].innerText;
         let productprice = price.replace('$' ,'') 
            // console.log(`${productName} - ${productprice}`)
            cart.push({name:productName , price:productprice})
            // console.log(cart)
            cartNum.innerText = cart.length;
            let eachitem = document.createElement('div');
            eachitem.classList.add('eachItem');
            let prodName = document.createElement('input');
            // let prodPrice = document.createElement('input');
            let prodPrice = document.createElement('p');
            let quantity =  document.createElement('input');
            quantity.setAttribute('type', 'number');
            quantity.value = 1
            
            prodName.classList.add('fields');
            // prodPrice.classList.add('fields');
            prodPrice.classList.add('itemPrice');
            quantity.classList.add('quantity')
            prodName.name = "prodName";
            // prodPrice.name = "prodPrice";
            
            eachitem.appendChild(prodName);
            eachitem.appendChild(prodPrice);
            eachitem.appendChild(quantity)
            addItemstoForm(prodName , prodPrice);
            itemsdiv.appendChild(eachitem);

            checkifInCart(productName)
            // console.log(quantity)
            doCalculation()
          
    }) 
})

function addItemstoForm(prodName, prodPrice){
  let lastItem = cart[cart.length - 1]
  prodName.value = lastItem.name;
  prodPrice.innerText = lastItem.price;
  doCalculation()
}

function doCalculation(){
  let quantities = document.querySelectorAll('.quantity');
  let total = document.querySelector('.total');

  quantities.forEach((item)=>{
    item.addEventListener('change',(e)=>{
      if(e.target.value <= 0){
        e.target.value = 1
      } 
    var prices = e.target.parentElement.childNodes[1].innerText;
      let quantity = parseFloat(e.target.value);
      let updatePrice = parseFloat(prices) * quantity;
      e.target.parentElement.childNodes[1].innerText = updatePrice
      console.log(prices)
    })
})
}

function checkifInCart(productName){
  
}

// function totalCal(total){
//   let prices = document.querySelectorAll('.itemPrice');
//   prices.forEach((price)=>{
//     console.log(price.value)
//   })
  
// }

