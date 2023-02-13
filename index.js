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

    let btns = '';
    let mouthsFront = ``;
    let mouthsBack = ``;
    for (let i = 0; i < this.mouth; i++) {
      //create btns
      btns += ` <div class="stove__btn" data-btn= ${i + 2}></div>`;

      //create mouths
      if (i < 2) {
        mouthsFront += `<div class="stove__mouth" data-mouth=${i + 2}>
        <div class="stove__fire" data-fire="off">
        </div>
      </div>`;
        
      } else {
        mouthsBack += `<div class="stove__mouth" data-mouth=${i + 2}>
        <div class="stove__fire" data-fire="off">
        </div>
      </div>`;
      }
    }

    //html fot stove
    stoveElement.className = `stove stove__${this.brand}`;
    stoveElement.innerHTML = `
    <div class='stove__top'>
      <div class="stove__mouths">
        <div class="stove__top-front">
          ${mouthsFront}
        </div>
        <div class="stove__top-back">
          ${mouthsBack}
        </div>
      </div>
    </div>

    <div class='stove__front'>
      <div class='stove__panel'>
        ${this.oven ? ' <div class="stove__btn" data-btn=1></div>' : ''}
        <div class='stove__controll'>
          <div id="clock">00:00</div>
          <div class='stove__onn'>
            <div class='stove__on' data-type="eletric"></div>
            ${this.oven ? ' <div class="stove__on" data-type="light"></div>' : ''}
          </div>
        </div>
       ${btns}
      </div>
      ${this.oven ? '<div class="stove__glass" data-mouth="1"> <div> </div> </div>' : ''}
      <div class='stove__brand'>${this.brand}</div>
    </div>
    
    <div class='stove__side'></div>
    `
    ;
    document.body.appendChild(stoveElement);
  }

  //update time and print on clock
  setClock() {
    let clock = document.getElementById("clock");

    function showTime() {
    	let time = new Date();
    	let hour = time.getHours();
    	let min = time.getMinutes();
    
    	hour = hour < 10 ? "0" + hour : hour;
    	min = min < 10 ? "0" + min : min;
    
    	let currentTime = hour + ":" + min;
    		clock.innerHTML = currentTime;
    }
    showTime();
    setInterval(showTime, 1000);
  }


  //adding class to open gas
  openMouth() {
    this.classList.toggle('stove__btn-open');

    //verify if the mouth are on
    let mouth2 = document.querySelector(`[data-mouth='${this.dataset.btn}']`);
    mouth2.firstElementChild.dataset.fire == 'on' ? mouth2.firstElementChild.dataset.fire = 'off' : '';
  }


  //verify which btn are preesed, light ou eletric
  onn() {
    let type = this.dataset.type;
    switch (type) {
      //for turn on the light in oven
      case type = 'light':
        const glass = document.querySelector('.stove__glass');
        glass.classList.toggle('stove__glass-on');
        break;

      //for turn on the mouth
      case type = 'eletric':
        const audio = document.getElementById("songEletric");
        audio.play();
        const btns = document.querySelectorAll('.stove__btn-open');

        if (btns) {
          btns.forEach(btn => {
            const mouth = document.querySelector(`[data-mouth='${btn.dataset.btn}']`)
            mouth.firstElementChild.dataset.fire = 'on';
          });
        }
        break;
    
      default:
        break;
    }
  }
}

//create stove and setting props
const myStove = new StoveContructor(4, true, 'white', 'bras', 'med');

myStove.createStove();
myStove.setClock();

const btns = document.querySelectorAll('.stove__btn');
btns.forEach(btn => {
  btn.addEventListener('click', myStove.openMouth)
});

const onn = document.querySelectorAll('.stove__on');
onn.forEach(on => {
  on.addEventListener('click', myStove.onn)
});

console.log(myStove);
