import Vue from 'vue';
import Router from 'vue-router';

import HomeRoutes from './home';
import AdminRoutes from './admin';
import DetailRoutes from './details';
import CartRoutes from './cart';

Vue.use(Router);

export default new Router({
  routes: [
    HomeRoutes,
    AdminRoutes,
    DetailRoutes,
    CartRoutes,
  ],
});
