<script>
	import StoveTimer from '../../Atoms/StoveClock/StoveClock.svelte';
	import StoveOnn from '../../Atoms/StoveOnn/StoveOnn.svelte';
  import StoveBtn from '../../Atoms/StoveBtn/StoveBtn.svelte';
import './style.scss';

</script>


<div class="stove__panel">
  <StoveBtn mouth={5}/>

  <div class="stove__controll">
    <StoveTimer />
    
    <div class="stove__onn">
      <StoveOnn type='eletric'/>
      <StoveOnn type='light'/>
    </div>

  </div>

  <StoveBtn mouth={1}/>
  <StoveBtn mouth={2}/>
  <StoveBtn mouth={3}/>
  <StoveBtn mouth={4}/>
</div>
