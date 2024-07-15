<script setup>
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { makeid } from "@/services/utils.js";
// common config
import useCommonConfig from "@/composables/useCommonConfig";

const { appStore } = useCommonConfig();

const { showAdd, listData, currentItem } = storeToRefs(appStore);

const title = ref("Add Item");
const editItem = ref();

const formData = ref({ food: null, location: null, expirationDate: null });

watch(
  () => currentItem.value,
  (newVal) => {
    if (newVal) {
      title.value = "Edit Item";
      console.log("newVal ", newVal);
      editItem.value = listData.value[newVal?.location]?.items.find(
        (x) => x?.id === newVal.item.id
      );
      console.log("editItem ", editItem.value);
      formData.value = editItem.value;
    }
  }
);

const canSubmit = computed(() => {
  return (
    formData.value.food &&
    formData.value.location &&
    formData.value.expirationDate
  );
});
const submitHandler = () => {
  console.log("submit handler");

  if (!currentItem.value) {
    // add
    if (!listData.value[formData.value.location]) {
      listData.value[formData.value.location] = {
        items: [],
      };
    }

    const newId = makeid(5);
    listData.value[formData.value.location].items.push({
      ...formData.value,
      id: newId,
    });
  } else {
    // edit
    listData.value[currentItem.value.location];
    editItem.value = formData.value;
  }

  console.log(
    "listData.value[formData.value.location] ",
    listData.value[formData.value.location]
  );

  showAdd.value = false;
  currentItem.value = null;
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
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
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
            eager
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
