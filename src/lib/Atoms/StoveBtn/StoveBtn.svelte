<script>
  import './style.scss';

  export let mouth = 0;

  function openMouth(params) {
    //adding class to open gas
    params.target.classList.toggle('stove__btn-open');

    offFire(params)
  }

  //verify if the mouth are on
  function offFire(params) {
    let mouth2 = document.querySelector(`[data-mouth='${params.target.dataset.btn}']`)
    mouth2.firstChild.dataset.fire == 'on' ? mouth2.firstChild.dataset.fire = 'off' :'';
  }
</script>

<div class="stove__btn" on:click={openMouth} data-btn={mouth}></div>
