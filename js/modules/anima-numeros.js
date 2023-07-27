export default class AnimaNumeros {
  constructor(numeros, observeTarget, observeClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observeClass = observeClass;
    // Bind o this do objeto ao callback da mutacao
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com numero em seu texto,
  // incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.ceil(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleMutation(mutation) {
    const mudou = mutation[0].target.classList.contains(this.observeClass);

    if (mudou) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o mutation observe para verificar quando a classe ativo é adicionada ao elemento
  // Precisa do bind ja que o this muda quando passada como callback
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
