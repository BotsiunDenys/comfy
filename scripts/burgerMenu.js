const wrapper = document.querySelector('.menu-wrapper');
const lines = document.querySelector('.lines');
const nav = document.querySelector('.menu_title_cart_menu');
const menuItems = document.querySelectorAll('.menu_item');
const itemsList = document.querySelector('.menu_items');
const checkBox = document.querySelector('.check-menu');
const checkBoxChange = () => {
  if (checkBox.checked) {
    document.querySelector('.burger-wrapper').style.borderRadius = '0';
    document.querySelector('.burger-wrapper').style.width = '120px';
    document.querySelector('.main-menu').style.transition =
      'all 0.5s ease-in-out';
  } else {
    document.querySelector('.burger-wrapper').style.borderRadius = '30px';
    document.querySelector('.burger-wrapper').style.width = '60px';
    document.querySelector('.main-menu').style.transition = 'none';
  }
};
const resize = () => {
  const width = window.innerWidth;
  if (width <= 770) {
    wrapper.classList.add('burger-wrapper');
    lines.style.display = 'flex';
    nav.classList.add('main-menu');
    itemsList.classList.remove('items');
    itemsList.classList.add('burger-items');
    menuItems.forEach((item) => {
      item.classList.add('burger-menu-item');
    });
  }
  if (width > 768) {
    wrapper.classList.remove('burger-wrapper');
    lines.style.display = 'none';
    nav.classList.remove('main-menu');
    itemsList.classList.add('items');
    itemsList.classList.remove('burger-items');
    menuItems.forEach((item) => {
      item.classList.remove('burger-menu-item');
    });
  }
};
export { checkBox, checkBoxChange, resize };
