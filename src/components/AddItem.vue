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
            v-model="formData.food"
            variant="outlined"
            label="Food"
            hide-details
            required
            class="mb-4"
          ></v-text-field>
          <v-select
            v-model="formData.location"
            label="Location"
            :items="['Freezer', 'Fridge', 'Pantry']"
            variant="outlined"
            class="mb-4"
          ></v-select>
          <v-date-input
            v-model="formData.expirationDate"
            label="Expiration Date"
            max-width="368"
            variant="outlined"
          ></v-date-input>
        </v-form>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>
