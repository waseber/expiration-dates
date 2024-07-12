<script setup>
import { storeToRefs } from "pinia";
// common config
import useCommonConfig from "@/composables/useCommonConfig";

const { appStore } = useCommonConfig();

const { showAdd } = storeToRefs(appStore);
</script>

<template>
  <v-footer height="40" app>
    <div class="text-caption text-disabled">
      &copy; {{ new Date().getFullYear() }}
    </div>

    <v-fab
      class="me-4"
      icon="mdi-plus"
      location="top end"
      color="blue"
      absolute
      offset
      @click="showAdd = !showAdd"
    ></v-fab>
  </v-footer>
</template>

<style scoped lang="sass"></style>
