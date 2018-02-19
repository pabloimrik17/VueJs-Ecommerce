<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers">
  </product-form>
</template>

<script>
import ProductForm from '../../components/product/ProductForm';

export default {
  components: { ProductForm },
  name: 'new-product',
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.$store.dispatch('allManufacturers');
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
  },
  methods: {
    addProduct(model) {
      console.log('model', model);
      this.$store.dispatch('addProduct', model);
    },
  },
};
</script>

<style scoped>

</style>
