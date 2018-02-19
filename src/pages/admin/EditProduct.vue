<template>
  <product-form
          @save-product="updateProduct"
          :model="model"
          :manufacturers="manufacturers"
          :isEditing="true">
  </product-form>
</template>

<script>
import ProductForm from '../../components/product/ProductForm';

export default {
  components: { ProductForm },
  name: 'edit-product',
  created() {
    if (!this.model.name) {
      this.$store.dispatch('productById', this.$route.params.id);
    }

    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },

  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      const product = this.$store.getters.productById(this.$route.params.id);
      return Object.assign({}, product);
    },
  },
  methods: {
    updateProduct(model) {
      this.$store.dispatch('updateProduct', model);
    },
  },
};
</script>

<style scoped>

</style>
