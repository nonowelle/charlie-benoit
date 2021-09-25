import Vue from "vue";
import VueRouter from "vue-router";

// import App from "./App.vue";

import ConfirmationsList from "./components/pages/ConfirmationsList.vue";
// import NotFound from "./components/pages/NotFound.vue";
import Home from "./components/Home.vue";
// import Mariage from "./components/Mariage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/confirmations", component: ConfirmationsList },
    // { path: "/:notFound(.*)", component: NotFound },
  ],
  mode: "history",
});

export default router;
