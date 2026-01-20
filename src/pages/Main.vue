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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import ModelSettings from "@/components/ModelSettings.vue"
import {PanelLeft} from "lucide-vue-next"
</script>

<template class="w-full h-full">
  <SidebarProvider
    :style="{
      '--sidebar-width': '350px',
    }"
    class="w-full "
  >
    <AppSidebar class="border-none"/>
    <SidebarInset class="h-[calc(100%-32px)] mt-8 flex">
      <div class="flex flex-col h-full">
        <header class="bg-sidebar sticky top-0 flex shrink-0 items-center gap-2 p-4">
        <SidebarTrigger class="-ml-1">
          <PanelLeft class="h-4 w-4"/>
        </SidebarTrigger>
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
      <div class="flex flex-1 flex">
        <router-view />
        
      </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
  <ModelSettings/>
</template>
