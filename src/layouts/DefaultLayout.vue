<script setup lang="ts">
import NavTop from "@/components/NavTop.vue";
</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <nav-top />

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <slot />
      </v-main>
    </v-app>
  </v-responsive>
</template>
