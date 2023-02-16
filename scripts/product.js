import furnitureList from './furnish.js';
import createInfo from './displayItemInfo.js';
import { displayCart, hideCart, cartIcon, closeCart } from './displayCart.js';
import { checkBox, checkBoxChange, resize } from './burgerMenu.js';
cartIcon.addEventListener('click', () => {
  displayCart();
});
hideCart.addEventListener('click', () => closeCart());
checkBox.addEventListener('change', () => checkBoxChange());
window.addEventListener('resize', () => resize());
window.onload = () => {
  createInfo(furnitureList);
};
