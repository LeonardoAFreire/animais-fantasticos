export default class TabNav {
  constructor(linksMenu, content) {
    this.tabMenu = document.querySelectorAll(linksMenu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o indice.
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Inicia os eventos nas tabs.
  addTabNavListener() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar o primeiro index
      this.activeTab(0);
      this.addTabNavListener();
    }
    return this;
  }
}
