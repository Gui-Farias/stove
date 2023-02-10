<script>
import { onMount } from 'svelte';
  
  onMount(() => {
    let clock = document.getElementById("clock");

		//update time and print
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
  });
</script>


<div id="clock">00:00</div>


<style>
	#clock {
		background-color: #000;
	  border-radius: 13px;
	  color: #F00;
	  display: flex;
	  align-items: center;
	  height: 26px;
	  padding-inline: 10px;
	  line-height: 1;
	}
</style>
