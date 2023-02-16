import displayItems from './displayProducts.js';
import furnitureList from './furnish.js';
const priceFilter = document.querySelector('.range');
const priceValue = document.querySelector('.value');
const input = document.querySelector('.search');
priceValue.innerHTML = `Value: $${priceFilter.value}`;
const priceChange = () => {
  priceValue.innerHTML = `Value: $${priceFilter.value}`;
  let list = furnitureList.filter((item) => {
    let itemValue = Math.ceil(
      parseFloat(item.price.substr(1, item.price.length))
    );
    let filterValue = parseInt(priceFilter.value);
    return itemValue <= filterValue;
  });
  displayItems(list);
  if (list.length < 1) {
    document.querySelector(
      '.main_goods'
    ).innerHTML = `<p class="search_error">Sorry, there are no products matched your search</p>`;
  }
};
const inputChange = () => {
  const inputValue = input.value;
  const list = furnitureList.filter((item) => {
    const lowerCaseName = item.name.toLowerCase();
    if (lowerCaseName.includes(inputValue)) {
      return item;
    }
  });
  displayItems(list);
  if (list.length < 1) {
    document.querySelector(
      '.main_goods'
    ).innerHTML = `<p class="search_error">Sorry, there are no products matched your search</p>`;
  }
};
const displayCompany = (company) => {
  if (company !== 'All') {
    displayItems(furnitureList.filter((item) => item.company === company));
  } else {
    displayItems(furnitureList);
  }
};
export {
  input,
  priceValue,
  priceFilter,
  displayCompany,
  priceChange,
  inputChange,
};
