<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
// common config
import useCommonConfig from "@/composables/useCommonConfig";

const { appStore } = useCommonConfig();

const { showAdd, listData, currentItem } = storeToRefs(appStore);

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

const editHandler = (location, item) => {
  showAdd.value = true;
  console.log("location ", location);
  currentItem.value = { location: location, item: item };
};
</script>

<template>
  <div v-if="Object.keys(listData).length > 0">
    <div v-for="(g, key) in listData" :key="key">
      <h2 class="mt-4 px-4 text-h5 text-capitalize">{{ key }}</h2>
      <template v-for="(item, iIdx) in g?.items" :key="iIdx">
        <v-list :bg-color="colorFormat(item.expirationDate)">
          <v-list-item-title class="px-4 d-flex align-center text-capitalize"
            >{{ item.food }} <v-spacer />
            <span v-html="formatDate(item.expirationDate)" class="mr-2"></span>
            <v-btn
              icon="mdi-pencil"
              color="blue"
              @click="editHandler(key, item)"
            ></v-btn>
          </v-list-item-title>
        </v-list>
      </template>
    </div>
  </div>
  <div v-else class="d-flex w-100 h-75 justify-center align-center">
    Nothing here, yet. You can add something.
  </div>
</template>
