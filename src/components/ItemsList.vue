<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
// common config
import useCommonConfig from "@/composables/useCommonConfig";

const { appStore } = useCommonConfig();

const { listData } = storeToRefs(appStore);

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const colorFormat = (date) => {
  const d = new Date(date);
  const today = Date.now();

  if (d <= today) {
    return "red-darken-4";
  }

  if (d == today) {
    return "yellow-darken-4";
  }

  return null;
};
</script>

<template>
  <div v-for="(g, gIdx) in listData" :key="gIdx">
    <h2 class="text-h5 text-capitalize">{{ g.location }}</h2>
    <template v-for="(item, iIdx) in g?.items" :key="iIdx">
      <v-list :bg-color="colorFormat(item.expirationDate)">
        <v-list-item-title class="d-flex text-capitalize"
          >{{ item.food }} <v-spacer /><span
            v-html="formatDate(item.expirationDate)"
          ></span
        ></v-list-item-title>
      </v-list>
    </template>
  </div>
</template>
