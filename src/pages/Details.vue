<template>
  <div>
    <product-details :product="product" :isAdding="true"/>
  </div>
</template>

<script>
import ProductDetails from '../components/product/ProductDetails';

export default {
  components: { ProductDetails },
  name: 'details',
  created() {
    if (!this.product.name) {
      this.$store.dispatch('productById', this.$route.params.id);
    }
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params.id);
    },
  },
};
</script>

<style scoped>

</style>
