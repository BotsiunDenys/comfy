const createInfo = (items) => {
  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  let itemHTML = '';
  let clickedItem = items.filter((item) => item.id == id);
  itemHTML = createItemCard(clickedItem[0]);
  document.querySelector('.item-card_container').innerHTML = itemHTML;
};
/* function for creating chosen item info */
const createItemCard = (item) => {
  return `
      <div class="item-card">
            <div class="photo item-card_photo">
              <img
                src="${item.img}"
                class="item-photo"
              />
            </div>
            <div class="item-description">
              <p class="item-name">${item.name}</p>
              <p class="item-company">${item.company}</p>
              <p class="desc-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                commodi cupiditate neque. Hic saepe numquam repellendus odit
                beatae, distinctio corporis officia impedit officiis, dignissimos
                at, nulla ullam corrupti neque deserunt. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rerum alias molestias sequi
                rem expedita. Error sed tempora veniam, nulla inventore modi sunt
                nemo porro corporis iure laborum cum voluptates quasi.
              </p>
              <div class="item-buy">
                <p class="item-price">${item.price}</p>
                <button class="buy-btn">Add to cart</button>
              </div>
            </div>
          </div>`;
};
export default createInfo;