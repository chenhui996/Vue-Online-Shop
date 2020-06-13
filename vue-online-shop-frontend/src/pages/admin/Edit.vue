<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
    ></product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm.vue";
export default {
  components: {
    "product-form": ProductForm
  },
  created() {
    const { name } = this.model;
    if (!name) {
      this.$store.dispatch("productById", {
        productId: this.$route.params['id']
      });
    }

    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      const product = this.$store.getters.productById(this.$route.params['id']);

      return { ...product, manufacturer: { ...product.manufacturer } };
    }
  },
  methods: {
    updateProduct(product) {
      this.$store.dispatch("updateProduct", {
        product
      });
    }
  }
};
</script>
