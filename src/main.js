import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";

import "@/assets/sass/_styles.scss";
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
  offset: -70,
});

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
