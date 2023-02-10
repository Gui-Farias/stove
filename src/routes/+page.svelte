<script>
  import Stove from '../lib/Organisms/Stove/Stove.svelte';
  import  './style.scss';

  import StoveContructor from './Stove.js';

  const Sto = new StoveContructor(4, true, 'white', 'bras', 'med')

  console.log(Sto);
</script>

<main class="main">
  <Stove />
</main>
