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
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ],
    };
  },
  methods: {
    addProduct(model) {
      return {};
    },
  },
};
</script>

<style scoped>

</style>
