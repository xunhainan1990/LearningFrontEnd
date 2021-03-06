import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/me", component: About },
];
const router = new VueRouter({
  routes,
});
export default router;
