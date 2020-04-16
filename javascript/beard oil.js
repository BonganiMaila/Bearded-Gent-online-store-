

let button1 = document.querySelector('#button');
let total = 0;
let price = document.querySelector('#priceee').innerHTML
let amount = 0;

button1.addEventListener("click",function(){
total ++;
price ++;


//calculate the quantity in here
amount = total * price
    

    alert("The number of items in your cart " +total) ;
    alert("Your current total is R" + amount);

    alert.textContent = total;
    showItem()
    })

function addItem(name, price, ) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[1].quantity += 1
            showItem()
            return
        }

    }

    const item = {
        name,
        price,
        qty: 1
    }
    cart.push(item)
    showItem()

}
//this is the show items function
function showItem() {
    //use this line of code to be an alert to show the total amount in your cart
    // console.log("The total amount in your cart is " + quantity /*total amount*/ )


    cartQuantity.innerHTML = ("The total quantity of items in your cart is " + quantity /*total items*/ )

    let itemString = ''
    for (i = 0; i < cart.length; i += 1) {
        const name = cart[i].name
        const price = cart[i].price
        const quantity = cart[i].quantity

        console.log(cart[i].name + "The price is" + cart[i].price + cart[i].quantity)

        //list the items
        itemString += `< li > name + "The price is " + price + " for these number of items " + quantity < /li>`
    }
    itemList.innerHTML = itemString

    //use this line of code to be an alert to show the total amount in your cart
    cartTotal.innerHTML = ("The total amount in your cart is R" + total.toFixed[2] /*total amount*/ )
    //dont forget to use this line of code in your categoty as an alert
    alert("You have added " + cart[i].name + " to your cart")
    alert("Your total amount is " + getTotal())
}


//-------------------------------------------------------------------------------------------------
//Save cart information
let shoppingCart =  [];
  
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
