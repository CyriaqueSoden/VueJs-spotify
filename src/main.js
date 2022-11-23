import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import greenButton from "./App.vue";

const app = createApp(App);

app.component("greenButton", greenButton);

app.use(router);

app.mount("#app");
