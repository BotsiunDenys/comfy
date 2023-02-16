/* displaying featured items on index.html */
const displayFeatured = (items) => {
  let furnitures = '';
  let list = items.filter((item) => item.featured === 'true');
  list.forEach((element) => {
    furnitures += createItem(element);
  });
  document.querySelector('.main_featured-items').innerHTML = furnitures;
};
/* function for creating featured item on index.html */
const createItem = (item) => {
  return `
    <div class="featured-item" id="${item.id}">
    <div class="more_info"><a href="product.html?id=${item.id}" class="products_link"><img src="img/loupe.png"></a></div>
              <img src="${item.img}" class="popular_item" />
              <p class="name">${item.name}</p>
              <p class="price">${item.price}</p>
            </div>`;
};
export default displayFeatured;
