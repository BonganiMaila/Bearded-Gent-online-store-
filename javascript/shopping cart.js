  let products = [{
          "name": " 100% Natural Organic Beard Oil",
          "price": 170,
          "img": "../images/natural organic beard oil.jpg",

      },
      {
          "name": "The Gentleman's Beard Oil - Fresh Wood",
          "price": 189,
          "img": "../images/Fresh Wood.html",

      },
      {
          "name": "Burly Inc.'s Wooded Earth Beard Oil",
          "price": 215,
          "img": "../images/beard mob.jpg",
      },
      {
          "name": "The Captain's Beard 30ml Beard Growth Oil",
          "price": 315,
          "img": "../images/Captain's Beard.html",
      },
      {
          "name": "Burly Inc.'s Wooded Earth Beard Oil",
          "price": 180,
          "img": "../images/Beard_Oil_WoodedEarth.png",
      },
      {
          "name": "Loreal Men Expert Barber Club Long Beard & Skin Oil",
          "price": 149,
          "img": "../images/Loreal Men Expert.html",

      },
      {
          "name": "The Grizzly Beard Co - Stainless Steel Beard Shaping Tool",
          "price": 199,
          "img": "../images/beard comb.jpg",
      },
      {
          "name": "The Gentleman's Beard Club Balm 50g",
          "price": 250,
          "img": "../pages/Beard Club Balm.html",
      },
      {
          "name": "Beard Boys - Beard Soap Milk & Honey",
          "price": 129,
          "img": "../images/beard soap.jpg",
      },
      {
          "name": "The Captain's Beard 200ml Beard Wash",
          "price": 299,
          "img": "../pages/Beard Wash.html",
      },
      {
          "name": "RESULTE Conditioning BEARD Softener",
          "price": 149,
          "img": "../images/beard softener.jpg",
      },
      {
          "name": "Beard Straightening Comb",
          "price": 399,
          "img": "../images/brash.jpeg",

      }
  ]





  //declaring all the constant variable
  const cartQuantity = document.getElementById("cartQuantity")
  const cartTotal = document.getElementById("cartTotal")
  const itemList = document.getElementById("itemList")


  //-------------------------------------------------------------------------------------------------
  //handle on change event listeners
  itemList.onchange = function (e) {
      if (e.target && e.target.classList.contains('update')) {
          const name = e.target.dataset.name
          const quantity = e.target.dataset.quantity


      }

  }

  //-------------------------------------------------------------------------------------------------
  //handle event listeners

  //event to remove an item from the list
  itemList.onclick = function (e) {
      if (e.target && e.target.classList.contains('remove')) {
          const name = e.target.dataset.name
          removeItems(name)
      } else if (e.target && e.target.classList.contains('addOne')) {

          const name = e.target.dataset.name
          addItem(name)
      } else if (e.target && e.target.classList.contains('subtractOne')) {
          const name = e.target.dataset.name
          removeItems(name, 1)
      }

  }

  //event to add an item from the list


  //-------------------------------------------------------------------------------------------------
  //this is the add items function
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

  //-------------------------------------------------------------------------------------------------
  //this is the show items function
  // Empty array
  let cart = [];
  var display = document.querySelector('#codeDisplay');

  // Shop page view
  for (var i = 0; i < products.length; i++) {
      var itemName = products[i].name;
      var itemPrice = products[i].price;
      var itemImg = products[i].img;

      // Grabs row and creates a div element in DOM
      var row = document.querySelector('#row');
      var col = document.createElement('div');
      col.classList.add('col-md-4');

      // The div inner html
      col.innerHTML +=
          `
<div class="item">
    <img src="${itemImg}" alt="" class="item-img" id="item-img">
    <div class="overlay">
        <article class="text">
            <h3 class="item-title" id="${itemName}">${itemName}</h3>
            <p class="item-details" id="item-details">${itemDesc}</p>
            <p class="item-price">R${itemPrice}</span></p>
            <button class="add" onclick="openCart()" data-name="${itemName}" data-price="${itemPrice}">
                Add
            </button>
        </article>
    </div>
</div>
`;

      // Joining HTML element with created element
      row.appendChild(col);
  }

  //---------------------------------------------------------------------------------------------
  // adds item to cart on click (add btn)
  $(".add").click(function (event) {
      event.preventDefault();
      let name = $(this).attr("data-name");
      let price = Number($(this).attr("data-price"));
      addItem(name, price, 1);
      countCart();
      displayCart();
      return false;
  })

  //-----------------------------------------------------------------------------------------------
  // show cart interface
  function displayCart() {
      let cartArray = listCart();
      let output = "";

      // Creates a view for each item added to cart
      for (let i in cartArray) {
          // displays and creates div /sections for the cart
          output += `
    <div class='item-container'>
        <section class='titles'>
            <div class='name'>${cartArray[i].name}</div> 
            <div class='count'>${cartArray[i].count}</div>
            <div class='price'>R${cartArray[i].price}</div>
        </section>
        <section class='qtyBtns'>
            <button class='addQty' data-name='${cartArray[i].name}'>+</button>
            <button class='subtractQty' data-name='${cartArray[i].name}'>-</button>
        </section>
        <button class='deleteBtn' data-name='${cartArray[i].name}'> Remove Item</button>
    </div>
    `;
      }
      //---------------------------------------------------------------------------------------------
      // item 
      Item = function (name, price, count) {
          this.name = name
          this.price = price
          this.count = count
      }
      //-------------------------------------------------------------------------------------------------
      //get the total number of items/count
      function getQuantity() {
          //use this line of code to calculate the numer of items added in the cart
          let quantity = 0
          for (let i = 0; i < cart.length; i += 1) {
              quantity += cart[i].quantity
          }
          //use this line of code to be an alert to show the total amount in your cart
          alert("The total amount in your cart is " + quantity /*total amount*/ )
      }

      //-------------------------------------------------------------------------------------------------
      //get the total amount
      function getTotal() {
          let discount = 50;
          let discountedTotal;
          let VAT = 0.15;
          let total = 0;
          let grandTotal = 0;
          for (let i = 0; i < cart.length; i += 1) {
              total += cart[i].price * cart[i].quantity
              grandTotal = total + (total * VAT)
          }
          //use this line of code to be an alert to show the total amount in your cart
          return grandTotal.toFixed(2) /*total amount*/
          //apply the discount
          if (total => 500) {
              discountedTotal = grandTotal - (grandTotal * discountPrice);
              // Gets coupon code
              getCoupon = () => {
                  // Checks if display is not empty
                  if (display.innerHTML !== ' ') {
                      // Coupon is value 400 which is subtracted from the grand total
                      let couponCost = totalCost - 130;

                      // If the coupon value is less or = 0
                      if (couponCost <= 0) {
                          // Return coupon value to 0
                          couponCost = 0;
                          $(output).html('Your cart is empty!')
                      }

                      // Appends coupon cost to html
                      var output = document.querySelector('.coupon');
                      $(output).html(couponCost);

                      return couponCost;
                  }
              }
              getCoupon();

          } else return grandTotal.toFixed(2)
      }

      //-------------------------------------------------------------------------------------------------
      //Remove item
      function removeItems(name, quantity = 0) {
          for (i = 0; i < cart.length; i += 1) {
              if (cart[i].name === name) {
                  if (quantity < 0) {
                      cart[1].quantity -= quantity
                  }
                  if (cart[1].quantity < 1 || quantity == 0) {
                      cart.splice(i, 1)
                  }
                  showItem()
                  return
              }
          }

      }

      //-------------------------------------------------------------------------------------------------
      // update cart
      function updateCart() {
          for (let i = 0; i < cart.length; i += 1) {
              if (cart[i].name === name) {
                  if (quantity < 1) {
                      removeItems(name)
                  }
                  cart[1].quantity = quantity
                  showItem()
                  return
              }
          }

      }


      //-------------------------------------------------------------------------------------------------
      // Clear cart
      function clearCart() {
          cart = [];
          saveCart();
      }

      let resetButton = document.getElementById("#removeItem")
      //function to clear the cart items
      resetButton.addEventListener('click', function () {

      })


      // total price 
      function totalCart() {
          let totalCost = 0;
          for (let i in cart) {
              totalCost += cart[i].price * cart[i].count;
          }

          return totalCost;
      }

      // Checking the form input 
      // thought -- if values are inputted through form, produce code -
      let users = [];
      let codes = [];



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