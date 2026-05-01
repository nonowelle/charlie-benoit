import Vue from "vue";
import VueRouter from "vue-router";

import ConfirmationsList from "./components/pages/ConfirmationsList.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/confirmations", component: ConfirmationsList },
  ],
  mode: "history",
});

export default router;
