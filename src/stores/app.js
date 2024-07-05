// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    //
    showAdd: false,
    listData: [
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
    ],
  }),
  action: {
    //
  },
  persist: true,
});
