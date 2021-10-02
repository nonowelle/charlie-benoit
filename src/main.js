import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import Axios from "axios";

import "@/assets/sass/_styles.scss";
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false;

Vue.use(VueResource);

Axios.defaults.withCredentials = false;
Vue.prototype.$axios = Axios;

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
  offset: -70,
});

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
