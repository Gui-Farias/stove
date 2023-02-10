<script>
import StoveGlass from '../../Atoms/StoveGlass/StoveGlass.svelte';
	import StoveMonths from '../../Molecules/StoveMonths/StoveMonths.svelte';
  import StovePanel from '../../Molecules/StovePanel/StovePanel.svelte';

  import './style.scss';  
</script>

<div class="stove">
  <div class="stove__top">
    <StoveMonths/>
  </div>
 
  <div class="stove__front">
    <StovePanel />
    <StoveGlass />
  </div>

  <div class="stove__side"></div>
</div>
