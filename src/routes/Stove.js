import soundEletric from '$lib/sounds/eletric.mp3';

import Stove from '../lib/Organisms/Stove/Stove.svelte'

export default class StoveContructor {
  constructor(mouth, oven, color, brand, size) {
    this.mouth = mouth;
    this.oven = oven;
    this.color = color;
    this.brand = brand;
    this.size = size;
  }

  //create Stove in html
  createStove() {
    const stoveElement = document.createElement("div");
    stoveElement.className = `stove__${this.brand}`;
    stoveElement.style.background = this.color;
    stoveElement.innerHTML = `
    <p>Brand: ${this.brand}</p>
    `

    // Trying show the component # error #
    // ${Stove}
    // Stove
    // <Stove/>
    ;

    document.body.appendChild(stoveElement);
  }


  //adding class to open gas
  openMouth(params) {
    params.target.classList.toggle('stove__btn-open');
    this.offFire(params)
  }


  //verify if the mouth are on
  offFire(params) {
    let mouth2 = document.querySelector(`[data-mouth='${params.target.dataset.btn}']`)
    mouth2.firstChild.dataset.fire == 'on' ? mouth2.firstChild.dataset.fire = 'off' :'';
  }


  //verify which btn are preesed, light ou eletric
  onn(type) {
    switch (type) {
      case type = 'light':
        this.light();
        break;

      case type = 'eletric':
       this.eletric();
        break;
    
      default:
        break;
    }
    
  }
  
  //function for turn on the light in oven
  light() {
    const glass = document.querySelector('.stove__glass');
    glass.classList.toggle('stove__glass-on');
  }

  //function for turn on the mouth
  eletric() {
    const stoneEletric = new Audio(soundEletric);
    const btn = document.querySelectorAll('.stove__btn-open');

    if (btn) {
      btn.forEach(element => {
        const mouth = document.querySelector(`[data-mouth='${element.dataset.btn}']`)
        mouth.firstChild.dataset.fire = 'on';
      });
    }

    stoneEletric.play();
  }

}
