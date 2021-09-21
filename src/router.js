import { createRouter, createWebHistory } from "vue-router";
// import App from "./App.vue";

import ConfirmationsLists from "./components/pages/ConfirmationsList.vue";
import NotFound from "./components/pages/NotFound.vue";
import Home from "./components/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/confirmations", component: ConfirmationsLists },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
