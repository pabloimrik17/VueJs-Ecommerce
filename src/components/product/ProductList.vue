<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product" :key="product._id"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem';

export default {
  components: { ProductItem },
  name: 'product-list',
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>

<style scoped>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
