const cartIcon = document.querySelector('.cart-icon');
/* functions for displaying and hiding cart layout */
const displayCart = () => {
  document.querySelector('.cart-overlay').classList.add('overlay-show');
  document.querySelector('.cart-page').classList.add('show');
};
const hideCart = document.querySelector('.close-cart');
const closeCart = () => {
  document.querySelector('.cart-overlay').classList.remove('overlay-show');
  document.querySelector('.cart-page').classList.remove('show');
};
/* creating DOM for added element in cart */
const createItemDOM = (item) => {
  return `
            <img
                      src="${item.img}"
                      alt="product img"
                      class="cart-img-item"
                    />
                    <div class="cart-item-description" id="${item.id}">
                      <p class="name-item">${item.name}</p>
                      <p class="price-item">${item.price}</p>
                      <p class="remove-item">remove</p>
                    </div>
                    <div class="quantity-controller" id="${item.id}">
                      <p class="add">&#9650;</p>
                      <p class="quantity">${item.quantity}</p>
                      <p class="substract">&#9660;</p>
                    </div>`;
};
export default createItemDOM;
export { closeCart, displayCart, cartIcon, hideCart };
