const setMenuButtonHandler = () => {
  const menu = document.querySelector('.menu');
  const menuButton = menu.querySelector('.menu__button');
  const headerLogo = document.querySelector('.header__logo .logo');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('menu--opened');
    headerLogo.classList.toggle('logo--white');
  });
};

setMenuButtonHandler();
