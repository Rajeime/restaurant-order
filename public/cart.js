if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){

let rmBtn = document.querySelectorAll('.rmBtn');
rmBtn.forEach((remove)=>{
    remove.addEventListener('click',(e)=>{
        row = e.target.parentElement
        row.remove();
        updateTotal()
    })
})
let addButtons = document.querySelectorAll('.addButton');
addButtons.forEach((buttonz)=>{
    buttonz.addEventListener('click',(e)=>{
        var button = e.target
        var item = button.parentElement;
        var image = item.querySelector('.image').src;
        var name = item.querySelector('.prodName').innerText;
        var price = item.querySelector('.price').innerText;
        console.log(image)

        addtoCart(image, name , price)
    })
})

function addtoCart(image, name , price){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cartItem')
    var cartItems = document.querySelector('.cartItems');
    var cartContents = 
    ` <div class="cartItem">
    <img src="${image}" alt="">
    <h4>${name}</h4>
    <p class="cartItemprice">${price}</p>
    <input type="number" class="quantity">
    <button class="rmBtn">Remove</button>
    </div>`;
    cartRow.innerHTML = cartContents
    cartItems.append(cartRow)

}
let quantities = document.querySelectorAll('.quantity');
quantities.forEach((quantity)=>{
    quantity.addEventListener('change',(e)=>{
        var input = e.target
        if(isNaN(input.value) || input.value <=0){
            input.value = 1
        }
        updateTotal()
    })
})

function updateTotal(){
    var cartContainer = document.querySelector('.cartItems');
    var rows = cartContainer.querySelectorAll('.cartItem');    
    var total = 0
    for(var i= 0 ; i < rows.length; i++){
        var row = rows[i];
        var priceElement = row.querySelector('.cartItemprice');
        var quantityElement = row.querySelector('.quantity');
        var price = parseFloat(priceElement.textContent);
        var quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    document.querySelector('.total').innerHTML = total
}


}