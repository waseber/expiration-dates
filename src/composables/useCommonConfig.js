// import { storeToRefs } from "pinia";
// import { ref, computed, watch, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { useRoute, useRouter } from "vue-router";

// stores
import { useAppStore } from "@/stores/app";

export default function useCommonConfig() {
  //vars
  const route = useRoute();
  const router = useRouter();
  const display = useDisplay();
  const appStore = useAppStore();

  return {
    route,
    router,
    display,
    appStore,
  };
}
