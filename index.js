var cart = [];

function getRandomInt(min,max) {
  // 1-100 --> [0-1) * (100) + 1
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function generateCartItem(itemName) {
  // generates the two key value pairs with itemname and itemprice in front
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item1 = generateCartItem(item);
/* var price = Math.floor(Math.random()*100);
 var itemObject = {};
 var name = `itemName: ${item}`;
 function listPrice(price) {
   return `itemPrice: ${price}`
 }
 itemObject[name] = listPrice(price);
 */
 cart.push(item1);
 console.log(`${item} has been added to your cart.`);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  var cartItems = [];
  var inCart = 'In your cart, you have '
  if (cart.length === 0 ) {
    console.log('Your shopping cart is empty.');
    return('Your shopping cart is empty.');
  } else if (cart.length === 1){
    console.log(inCart + `${Object.values(cart[0])} at ${Object.values(cart[0])}.`);
    return(inCart + `${cart[0]['itemName']} at ${cart[0]['itemPrice']}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
