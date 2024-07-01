<script setup>
import AppHeader from "@/components/AppHeader.vue";
//
</script>
<template>
  <v-app>
    <app-header />
    <v-main>
      <slot />
    </v-main>

    <AppFooter />
  </v-app>
</template>
