// import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/sass/_styles.scss";
import { createApp } from "vue";
const VueScrollTo = require("vue-scrollto");

//
const app = createApp(App);
app.use(router);
app.mount("#app");

// You can also pass in the default options
app.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: -40,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

app.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#Home");
