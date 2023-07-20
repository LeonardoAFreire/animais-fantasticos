import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");

  const eventos = ['click', 'touchstart'];
  const classeAtivo = 'ativo';

  function openMenu(event) {
    event.preventDefault();
    menuList.classList.add(classeAtivo);
    menuButton.classList.add(classeAtivo);

    outsideClick(menuList, eventos, () => {
      menuList.classList.remove(classeAtivo);
      menuButton.classList.remove(classeAtivo);
    });
  }

  if (menuButton && menuList) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
