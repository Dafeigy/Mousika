<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import {Button} from '@/components/ui/button'
import { cn } from "@/lib/utils"
// import { useSidebar } from "./utils"
import { useSidebar } from "@/components/ui/sidebar/utils"
// const { toggleSidebar } = useSidebar()
import { Settings } from 'lucide-vue-next';


</script>

<template>
    <SidebarProvider class="z-0 w-auto bg-sidebar">
        <div class="mt-8 h-16 flex justify-center items-center">
            <SidebarTrigger class="mr-2">
                <Settings />
            </SidebarTrigger>
        </div>
    <SidebarInset class="">
        <Sidebar side="right" class="mt-8 h-full border-l" variant="sidebar">
        <SidebarHeader class="bg-sidebar sticky top-0 flex shrink-0 items-center gap-2 p-4 border-b h-16">
            <div class="flex w-full h-full items-center justify-between">
                <div class="text-base font-medium text-foreground flex">
                <p class="text-sm">Settings</p>
                </div>
            </div>
        </SidebarHeader>
    </Sidebar>
    </SidebarInset>
    </SidebarProvider>
    
</template>