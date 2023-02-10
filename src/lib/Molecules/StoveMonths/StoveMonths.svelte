<script>
  import StoveMouth from '../../Atoms/StoveMouth/StoveMouth.svelte';

</script>


<div class="stove__months">
  <div class="stove__top-front">
    <StoveMouth mouth={1}/>
    <StoveMouth mouth={2}/>
  </div>
  <div class="stove__top-back">
    <StoveMouth mouth={3}/>
    <StoveMouth mouth={4}/>
  </div>
</div>

<style>
    .stove__months {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .stove__months div{
      width: 50%;
    }
</style>
