<script>
  import soundEletric from '$lib/sounds/stoneEletric.mp3';

  export let type = '';

  //verify which btn are preesed, light ou eletric
  function onn(type) {
    switch (type) {
      case type = 'light':
        light();
        break;

      case type = 'eletric':
        eletric();
        break;
    
      default:
        break;
    }
    
  }
  
  //function for turn on the light in oven
  function light() {
    const glass = document.querySelector('.stove__glass');
    glass.classList.toggle('stove__glass-on');
  }

  //function for turn on the mouth
  function eletric() {
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

</script>

<div on:click={onn(type)} data-type={type}></div>


<style>
  div {
    display:block;
    position: relative;
    aspect-ratio: 1;
    width: 15px;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: inset 0 0 3px;
  }

  [data-type='light'] {
    background-color: #ff0;
  }

  [data-type='eletric'] {
    background-color: #00f;
  }
</style>
