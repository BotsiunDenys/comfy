import furnitureList from './furnish.js';
import displayItems from './displayProducts.js';
import {
  input,
  priceValue,
  priceFilter,
  displayCompany,
  priceChange,
  inputChange,
} from './filters.js';
import { displayCart, hideCart, cartIcon, closeCart } from './displayCart.js';
import { checkBox, checkBoxChange, resize } from './burgerMenu.js';
cartIcon.addEventListener('click', () => {
  displayCart();
});
hideCart.addEventListener('click', () => closeCart());
checkBox.addEventListener('change', () => checkBoxChange());
window.addEventListener('resize', () => resize());
window.onload = () => {
  displayItems(furnitureList);
};
priceValue.innerHTML = `Value: $${priceFilter.value}`;
priceFilter.addEventListener('input', () => priceChange());
input.addEventListener('keyup', () => inputChange());
document.getElementById('all').addEventListener('click', () => {
  displayCompany('All');
});
document.getElementById('Ikea').addEventListener('click', () => {
  displayCompany('Ikea');
});
document.getElementById('Marcos').addEventListener('click', () => {
  displayCompany('Marcos');
});
document.getElementById('Caressa').addEventListener('click', () => {
  displayCompany('Caressa');
});
document.getElementById('Jysk').addEventListener('click', () => {
  displayCompany('Jysk');
});
