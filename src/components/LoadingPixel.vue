<script setup>

</script>
<template>
    <div class="load-container w-full h-full flex justify-center items-center relative">
        <div class="loader aspect-square w-[21px] absolute">
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-x-0"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-x-full"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-x-[200%]"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-y-full"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-y-full translate-x-full"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-y-full translate-x-[200%]"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-y-[200%]"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-y-[200%] translate-x-full"></span>
            <span class="loader-block absolute top-0 left-0 inline-block w-1/3 aspect-square bg-[#96db6e] opacity-0 shadow-lg translate-y-[200%] translate-x-[200%]"></span>
        </div>
    </div>
</template>

<style scoped>


*{
--single: 30px;
--double: 60px;
--element: #96db6e;
--bg: transparent; 
--border: 0px;
--opacity: 0.2;
}


/* .loader-block styles moved to Tailwind classes */
.loader-block {
  animation: show 0.4s infinite alternate;
}

.loader-block:nth-child(1) {
  /* transform: translate(0, 0); */
  animation-delay: 0.1s;
}

.loader-block:nth-child(2) {
  /* transform: translate(var(--single), 0); */
  animation-delay: 0.2s;
}

.loader-block:nth-child(3) {
  /* transform: translate(var(--double), 0); */
  animation-delay: 0.3s;
}

.loader-block:nth-child(6) {
  /* transform: translate(var(--double), var(--single)); */
  animation-delay: 0.4s;
}

.loader-block:nth-child(9) {
  /* transform: translate(var(--double), var(--double)); */
  animation-delay: 0.5s;
}

.loader-block:nth-child(8) {
  /* transform: translate(var(--single), var(--double)); */
  animation-delay: 0.6s;
}

.loader-block:nth-child(7) {
  /* transform: translate(0, var(--double)); */
  animation-delay: 0.7s;
}

.loader-block:nth-child(4) {
  /* transform: translate(0, var(--single)); */
  animation-delay: 0.8s;
}

.loader-block:nth-child(5) {
  /* transform: translate(var(--single), var(--single)); */
  animation-delay: 0.2s;
  animation: show 0.6s infinite alternate;
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