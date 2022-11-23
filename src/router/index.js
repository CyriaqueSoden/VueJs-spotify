import { createRouter, createWebHistory } from "vue-router";
import getStartedView from "../views/getStarted.vue";
import loadingView from "../views/loading.vue";
import choosemodeView from "../views/chooseMode.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/getStarted",
      name: "getStarted",
      component: getStartedView,
    },
    {
      path: "/loading",
      name: "loading",
      component: loadingView,
    },
    {
      path: "/chooseMode",
      name: "chooseMode",
      component: choosemodeView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //
    //   component: () => import("../views/loading.vue"),
    // },
  ],
});

export default router;
