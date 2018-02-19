import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Details from '@/pages/Details';
import AdminIndex from '@/pages/admin/AdminIndex';
import ProductIndex from '@/pages/admin/ProductIndex';
import NewProduct from '@/pages/admin/NewProduct';
import EditProduct from '@/pages/admin/EditProduct';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex,
      children: [
        {
          path: '',
          name: 'ProductIndex',
          component: ProductIndex,
        },
        {
          path: 'new',
          name: 'NewProduct',
          component: NewProduct,
        },
        {
          path: 'edit/:id',
          name: 'EditProduct',
          component: EditProduct,
        },
      ],
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
