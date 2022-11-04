import { createApp } from "vue";
import App from "@ui/App.vue";
import "@css/index.css";
import router from "@router/index.ts";

createApp(App).use(router).mount("#app");
