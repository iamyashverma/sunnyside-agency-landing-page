const head = document.querySelector('header');
const hamburger = document.querySelector('.hamburger-btn');

hamburger.addEventListener('click', (e) => {
  const menuList = document.querySelector('.menu-list');
  if (menuList.style.display == '' || menuList.style.display == 'none') {
    menuList.style.display = 'block';
    menuList.classList.add('flex-center');
    menuList.classList.add('flex-dir-column');
    head.style.height = '1200px';
    hamburger.style.backgroundImage = "url('/images/cancel-24.png')";
    head.insertBefore(menuList, document.querySelector('#intro-text'));
  } else {
    menuList.style.display = 'none';
    head.style.height = '740px';
    hamburger.style.backgroundImage = "url('/images/icon-hamburger.svg')";
  }
});
