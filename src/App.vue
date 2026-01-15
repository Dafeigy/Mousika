<script setup lang="ts">
// import { ref } from "vue";
// import { invoke } from "@tauri-apps/api/core";

// const greetMsg = ref("");
// const name = ref("");

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//   greetMsg.value = await invoke("greet", { name: name.value });
// }
import LoadingPixel from "@/components/LoadingPixel.vue";
import Main from "@/pages/Main.vue";
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center ">
    <!-- <LoadingPixel /> -->
    <Main />
  </div>
</template>
