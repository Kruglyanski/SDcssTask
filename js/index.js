const menu = document.querySelector('.menu');
const menuText = document.querySelectorAll('.menu__text');
const menuLogo = document.querySelector('.menu__logo-image');
const menuLogoName = document.querySelector('.menu__logo-name');
const menuButton = document.querySelector('.menu__burger-icon');

const menuItems = document.querySelector('.menu__items');
const menuImages = document.querySelectorAll('.menu__image');


const menuOpenCloseTablet = () => {
    if(event.target.classList.contains('menu__burger-icon')) {
        menu.classList.remove('menu');
        menu.classList.add('menu_isOpened');

        menuText.forEach(item => {
            item.classList.remove('menu__text');
            item.classList.add('menu__text_isOpened');
        })

        menuLogo.classList.remove('menu__logo-image');
        menuLogo.classList.add('menu__logo-image_isOpened');

        menuLogoName.classList.remove('menu__logo-name');
        menuLogoName.classList.add('menu__logo-name_isOpened');

        menuButton.classList.remove('menu__burger-icon');
        menuButton.classList.add('menu__close-icon');


        menuItems.style.display = 'block';

        if(window.innerWidth <= 320) {

            menuImages.forEach(item => {
                item.style.display = 'none';

            })
        }
    }
    else if(event.target.classList.contains('menu__close-icon')) {
        menu.classList.add('menu');
        menu.classList.remove('menu_isOpened');

        menuText.forEach(item => {
            item.classList.add('menu__text');
            item.classList.remove('menu__text_isOpened');
        })

        menuLogo.classList.add('menu__logo-image');
        menuLogo.classList.remove('menu__logo-image_isOpened');

        menuLogoName.classList.add('menu__logo-name');
        menuLogoName.classList.remove('menu__logo-name_isOpened');

        menuButton.classList.add('menu__burger-icon');
        menuButton.classList.remove('menu__close-icon');


        if(window.innerWidth <= 320) {
            menuItems.style.display = 'none';
        }
    }
};

menu.addEventListener('click', menuOpenCloseTablet)