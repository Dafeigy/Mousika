<script setup>

</script>
<template>
    <div class="load-container">
        <div class="loader">
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
            <span class="loader-block"></span>
        </div>
    </div>
</template>

<style>


:root{
--full: 90px;
--single: 30px;
--double: 60px;
--element: #96db6e;
--bg: transparent; 
--border: 0px;
--opacity: 0;
}

.load-container{
  /* // padding: 100px; */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: var(--bg);
}

.loader {
  position: absolute;
  width: var(--full);
  height: var(--full);  
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}

.loader-block {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  opacity: var(--opacity);
  border: var(--border) solid var(--element);       
  width: var(--single);
  height: var(--single);
  background: var(--element);
  animation: show 0.4s infinite alternate;
}

.loader-block:nth-child(1) {
  transform: translate(0, 0);
  animation-delay: 0.1s;
}

.loader-block:nth-child(2) {
  transform: translate(var(--single), 0);
  animation-delay: 0.2s;
}

.loader-block:nth-child(3) {
  transform: translate(var(--double), 0);
  animation-delay: 0.3s;
}

.loader-block:nth-child(6) {
  transform: translate(var(--double), var(--single));
  animation-delay: 0.4s;
}

.loader-block:nth-child(9) {
  transform: translate(var(--double), var(--double));
  animation-delay: 0.5s;
}

.loader-block:nth-child(8) {
  transform: translate(var(--single), var(--double));
  animation-delay: 0.6s;
}

.loader-block:nth-child(7) {
  transform: translate(0, var(--double));
  animation-delay: 0.7s;
}

.loader-block:nth-child(4) {
  transform: translate(0, var(--single));
  animation-delay: 0.8s;
}

.loader-block:nth-child(5) {
  transform: translate(var(--single), var(--single));
  animation-delay: 0s;
  animation: show 0.5s infinite alternate;
}

@keyframes show {
  from{
    opacity: var(--opacity);
  }
  to {
    opacity: 1;
  }
}
</style>