// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    //
    showAdd: false,
    listData: [
      {
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
      },
    ],
  }),
  action: {
    //
  },
  persist: true,
});
