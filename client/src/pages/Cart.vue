<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <!-- <template v-for="product in cart"> -->
      <product-item :products="cart"></product-item>
    <!-- </template> -->
  </div>
</template>



<script>
import ProductItem from '@/components/products/ProductItem.vue'
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to the Cart Page"
    };
  },
  computed: {
      cart(){
          return this.$store.state.cart;
      }
  },
  components :{
    'product-item' : ProductItem,
  }
};
</script>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>
