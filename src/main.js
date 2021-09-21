import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/sass/_styles.scss";
const VueScrollTo = require("vue-scrollto");

Vue.use(router);

// You can also pass in the default options
Vue.use(VueScrollTo, {
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

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  render: (h) => h(App),
}).$mount("#Home");
