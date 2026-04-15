import { createApp } from "vue";
import { createPinia } from "pinia";

// ROOT APP BOOTSTRAP
import App from "./App.vue";

// THIRD PARTY CSS
import "nprogress/nprogress.css";
import "simplebar-vue/dist/simplebar.min.css";
import "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css";

// MAIN CSS
import "./assets/index.css";

// ROUTER MODULE
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
