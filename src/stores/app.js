// Utilities
import { defineStore } from "pinia";
/*{
        location: "fridge",
        items: [{ food: "milk", expirationDate: "06/26/2024" }],
      },
      {
        location: "freezer",
        items: [{ food: "chicken", expirationDate: "04/26/2024" }],
      },
      {
        location: "pantry",
        items: [
          {
            food: "ketchup",
            expirationDate: "04/26/2025",
          },
        ],
      },*/
export const useAppStore = defineStore("app", {
  state: () => ({
    //
    showAdd: false,
    listData: {},
    currentItem: false,
  }),
  action: {
    //
  },
  persist: true,
});
