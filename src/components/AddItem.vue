<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
// common config
import useCommonConfig from "@/composables/useCommonConfig";

const { appStore } = useCommonConfig();

const { showAdd, listData } = storeToRefs(appStore);

const formData = ref({ food: null, location: null, expirationDate: null });

const canSubmit = computed(() => {
  return (
    formData.value.food &&
    formData.value.location &&
    formData.value.expirationDate
  );
});
const submitHandler = () => {
  console.log("submit handler");
  console.log("formData ", formData.value);

  if (!listData.value[formData.value.location]) {
    listData.value[formData.value.location] = {
      items: [],
    };
  }

  console.log(
    "listData.value[formData.value.location] ",
    listData.value[formData.value.location]
  );
  listData.value[formData.value.location].items.push(formData.value);
  // listData.value.push(formData.value);
  // reset
  // formData.value = { food: null, location: null, expirationDate: null };
};
</script>

<template>
  <v-bottom-sheet v-model="showAdd">
    <!--<template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Add Item"></v-btn>
    </template>-->
    {{ formData }}
    <v-card>
      <v-card-title>Add Item</v-card-title>
      <v-card-text>
        <v-form @submit="submitHandler">
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
            class="mb-4"
          ></v-date-input>
          <v-btn type="submit" :disabled="!canSubmit" color="blue"
            >Submit</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>
