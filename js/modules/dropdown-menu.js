import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  if (dropdownMenus.length) {
    dropdownMenus.forEach((item) => {
      ['touchstart', 'click'].forEach((UserEvent) => {
        item.addEventListener(UserEvent, handleClick);
      });
    });
  }
}

// export default function initDropDownMenu() {
//   const dropdownMenus = document.querySelectorAll('[data-dropdown]');
//   const outside = 'data-ouside';

//   dropdownMenus.forEach((menu) => {
//     if (!menu.hasAttribute(outside)) {
//       ['touchstart', 'click'].forEach((userEvent) => {
//         menu.addEventListener(userEvent, handleClick);
//       });
//     }

//     menu.setAttribute(outside, '');
//   });

//   function handleClick(event) {
//     event.preventDefault();
//     this.classList.toggle('ativo');
//     handleOutsideClick.element = this;

//     const html = document.documentElement;
//     html.addEventListener('click', handleOutsideClick);
//   }

//   const handleOutsideClick = {
//     handleEvent(event) {
//       if (!this.element.contains(event.target)) {
//         this.element.removeAttribute(outside);
//         this.element.classList.remove('ativo');
//         document.documentElement.removeEventListener('click', this);
//       }
//     },
//   };
// }
