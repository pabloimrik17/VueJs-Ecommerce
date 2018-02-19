import AdminIndex from '@/pages/admin/AdminIndex';
import EditProduct from '@/pages/admin/EditProduct';
import NewProduct from '@/pages/admin/NewProduct';
import ProductIndex from '@/pages/admin/ProductIndex';

export default {
  path: '/admin',
  component: AdminIndex,
  children: [
    {
      path: 'new',
      name: 'NewProduct',
      component: NewProduct,
    },
    {
      path: '',
      name: 'ProductIndex',
      component: ProductIndex,
    },
    {
      path: 'edit/:id',
      name: 'EditProduct',
      component: EditProduct,
    },
  ],
};
