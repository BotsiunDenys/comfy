import furnitureList from './fetch.js';
import createItemDOM from './displayCart.js';
const container = document.querySelector('.item-card_container'); // container for item info
const cartItemContainer = document.querySelector('.cart-items'); // container for item in cart
const totalSum = document.querySelector('.total-price'); // total sum paragraph in cart
/* function for getting and parsing items in storage */
const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};
let cartItems = getStorageItem('cart');
const cartNumber = document.querySelector('.goods-quantity'); // quantity of items in cart
// changing values in cart (quantity of item, total price)
const addToDOM = () => {
  let itemHTML = '';
  let num = 0;
  let total = cartItems.reduce((total, cartItem) => {
    return (total +=
      cartItem.price.substr(1, cartItem.price.length) * cartItem.quantity);
  }, 0);
  totalSum.innerHTML = `Total: $${total}`;
  cartItems.forEach((item) => {
    num += item.quantity;
    cartNumber.innerHTML = num;
    itemHTML += createItemDOM(item);
    document.querySelector('.cart-items').innerHTML = itemHTML;
  });
};
// adding chosen item to storage and changing it`s quantity if it is in it already
if (container) {
  container.addEventListener('click', (element) => {
    if (element.target.classList.contains('buy-btn')) {
      const url = new URLSearchParams(window.location.search);
      const id = url.get('id');
      let itemToAdd = furnitureList.filter((item) => item.id == id);
      const isExist = cartItems.find((item) => item.id == id);
      if (!isExist) {
        itemToAdd[0].quantity++;
        cartItems = [...cartItems, itemToAdd[0]];
      } else {
        isExist.quantity++;
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
      addToDOM();
      document.querySelector('.cart-overlay').classList.add('overlay-show');
      document.querySelector('.cart-page').classList.add('show');
    }
  });
}
// cart items controllers (increasing or decreasing amount of items, removing items)
cartItemContainer.addEventListener('click', (element) => {
  if (element.target.classList.contains('add')) {
    const clickedItem = element.target.closest('.quantity-controller').id;
    const isExist = cartItems.find((item) => item.id == clickedItem);
    cartItems.forEach((item) => {
      if (item.id == clickedItem) {
        isExist.quantity++;
      }
    });
  }
  if (element.target.classList.contains('substract')) {
    const clickedItem = element.target.closest('.quantity-controller').id;
    const isExist = cartItems.find((item) => item.id == clickedItem);
    cartItems.forEach((item) => {
      if (item.id == clickedItem) {
        if (isExist.quantity > 1) {
          isExist.quantity--;
        } else {
          cartItems.forEach((item) => {
            if (item.id == clickedItem) {
              cartItems = cartItems.filter((item) => item.id !== clickedItem);
              if (!cartItems.length) {
                document.querySelector('.cart-items').innerHTML = '';
                cartNumber.innerHTML = '0';
                localStorage.clear();
              }
            }
          });
        }
      }
    });
  }
  if (element.target.classList.contains('remove-item')) {
    const clickedItem = element.target.closest('.cart-item-description').id;
    const isExist = cartItems.find((item) => item.id == clickedItem);
    cartItems.forEach((item) => {
      if (item.id == clickedItem) {
        cartItems = cartItems.filter((item) => item.id !== clickedItem);
        if (!cartItems.length) {
          document.querySelector('.cart-items').innerHTML = '';
          cartNumber.innerHTML = '0';
          localStorage.clear();
        }
      }
    });
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  addToDOM();
});
// used for adding items to cart that are saved there on page load
addToDOM();
