import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Cria a div contendo informações com o total de animais

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // Apos transformar em JSON ativa as funcoes para preencher
      // e animar os numeros
      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
      });

      animaAnimaisNumeros();
    } catch (e) {
      console.log(Error(e));
    }
  }

  return criarAnimais();
}
