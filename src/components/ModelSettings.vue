<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  useSidebar
} from '@/components/ui/sidebar'
import {Button} from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import {ref} from 'vue'
const state = ref(useSidebar().state);

</script>

<template>
        <div class="flex h-full justify-center items-center w-5 m-0 bg-background">
                    <SidebarTrigger class="h-1/18 rounded-none rounded-l-lg border border-r-sidebar border-r z-11 bg-sidebar -translate-x-1/10 opacity-0 hover:opacity-100 hover:bg-sidebar hover:text-foreground"  size="sm">
                    <ChevronLeft class="w-2 h-2" v-if="state!=='expanded'"/>
                    <ChevronRight class="w-2 h-2" v-else/>
                    </SidebarTrigger>
        </div>
        <Sidebar side="right" class="mt-8 h-full border-l">
        <SidebarHeader class="bg-sidebar sticky top-0 flex shrink-0 items-center gap-2 p-4 border-b h-16">
            <div class="flex w-full h-full items-center justify-between">
                <div class="text-base font-medium text-foreground flex">
                <p class="text-sm">Settings</p>
                </div>
            </div>
        </SidebarHeader>
    </Sidebar>
    
    
</template>