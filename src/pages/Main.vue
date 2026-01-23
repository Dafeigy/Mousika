<script lang="ts">


</script>

<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue"
import { Button } from "@/components/ui/button"
import { Mail, Share2 } from "lucide-vue-next"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import ModelSettings from "@/components/ModelSettings.vue"


</script>

<template class="w-full h-full">
  <SidebarProvider
    :style="{
      '--sidebar-width': '350px',
    }"
    class="w-full flex flex-row"
  >
    <AppSidebar class="border-none"/>
    
    <SidebarInset class="h-[calc(100%-32px)] mt-8 flex px-4">
      <div class="flex flex-col h-full">
        <header class="bg-sidebar sticky top-0 flex shrink-0 items-center gap-2 p-2 -mx-5 z-2">
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-4"
        />
        <img src="@/assets/icons/deepseek-color.svg" alt="" srcset="">
        <p>新的聊天</p>
        <div class="ml-auto flex gap-2">
          <Button variant="ghost" size="icon-sm"><Mail/></Button>
          <Button variant="ghost" size="icon-sm" @click=""><Share2/></Button>
        </div >
      
      </header>
      <div class="flex justify-center h-[95%]">
        <router-view />
      </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
  <SidebarProvider class="z-0 w-auto bg-sidebar">
  <ModelSettings/>
  </SidebarProvider>
</template>
