<script setup>
import { ref } from "vue";

const listData = ref([
  {
    location: "fridge",
    items: [{ item: "milk", expirationDate: "06/26/2024" }],
  },
  {
    location: "freezer",
    items: [{ item: "chicken", expirationDate: "04/26/2024" }],
  },
  {
    location: "pantry",
    items: [
      {
        item: "ketchup",
        expirationDate: "04/26/2025",
      },
    ],
  },
]);
</script>

<template>
  <div v-for="(g, gIdx) in listData" :key="gIdx">
    <h2 class="text-capitalize">{{ g.location }}</h2>
    <template v-for="(item, iIdx) in g?.items" :key="iIdx">
      <v-list>
        <v-list-item-title class="d-flex text-capitalize">{{
          item.item
        }}</v-list-item-title>
      </v-list>
    </template>
  </div>
</template>
