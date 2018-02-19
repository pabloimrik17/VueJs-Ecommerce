<template>
    <div>
        <div class="title">
            <h1><i class="fa fa-braille"></i> In Stock</h1>
        </div>
        <product-list/>
    </div>
</template>

<script>
import ProductList from '../components/product/ProductList';

export default {
  components: { ProductList },
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
