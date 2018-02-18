<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers">
  </product-form>
</template>

<script>
import ProductForm from '../../components/products/ProductForm';

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
      console.log('model', model);
    },
  },
};
</script>

<style scoped>

</style>
