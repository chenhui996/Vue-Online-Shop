<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <!-- <template v-for="product in products"> -->
        <product-item :products='products'></product-item>
      <!-- </template> -->
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: "product-list",
  components: {
    'product-item' : ProductItem,
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  //找数据源；
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  }
};
</script>
