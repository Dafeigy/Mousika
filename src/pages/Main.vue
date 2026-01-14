<script lang="ts">
export const description = "Collapsible nested sidebars."
export const iframeHeight = "800px"
</script>

<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import LoadingPixel from "@/components/LoadingPixel.vue"
</script>

<template>
  <SidebarProvider
    :style="{
      '--sidebar-width': '350px',
    }"
  >
    <AppSidebar />
    <SidebarInset class="">
      <header class="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4 ">
        <SidebarTrigger class="-ml-1" />
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink href="#">
                All Inboxes
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator class="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Inbox</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div class="flex flex-col gap-4 p-4 ">
        <!-- <div
          v-for="index in 10"
          :key="index"
          class="h-12 rounded-lg bg-muted/50"
        /> -->
      </div>
      <LoadingPixel/>
    </SidebarInset>
  </SidebarProvider>
</template>
