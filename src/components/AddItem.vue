<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
// common config
import useCommonConfig from "@/composables/useCommonConfig";

const { appStore } = useCommonConfig();

const { showAdd } = storeToRefs(appStore);

const formData = ref({ item: "", location: "" });
</script>

<template>
  <v-bottom-sheet v-model="showAdd">
    <!--<template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Add Item"></v-btn>
    </template>-->

    <v-card>
      <v-card-title>Add Item</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="formData.item"
            hide-details
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>
