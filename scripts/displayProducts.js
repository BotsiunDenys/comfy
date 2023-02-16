const displayItems = (items) => {
  let furnitures = '';
  items.map((item) => {
    furnitures += createItem(item);
  });
  document.querySelector('.main_goods').innerHTML = furnitures;
};
// creating DOM for shop item in products.html
const createItem = (item) => {
  return `
    <div class="featured-item" id="${item.id}">
    <div class="more_info"><a href="product.html?id=${item.id}" class="products_link"><img src="img/loupe.png"></a></div>
              <img src="${item.img}" class="popular_item" />
              <p class="name">${item.name}</p>
              <p class="price">${item.price}</p>
            </div>`;
};
export default displayItems;
