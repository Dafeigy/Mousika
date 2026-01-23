<script setup lang="ts">
import SampleChat from '@/components/general/SampleChat.vue';
import UserPromptInput from '@/components/general/UserPromptInput.vue';
import ChatBasic from '@/components/general/ChatBasic.vue';
</script>

<template>
<SampleChat/>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 6px;
  margin: 0 12px;
}
::-webkit-scrollbar-track {
  background-color: #2a2b2d;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 2px;
  transition: background-color 0.2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #777;
}

* {  
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.2s ease;
}
*:hover {  
  scrollbar-color: transparent transparent;
}

</style>