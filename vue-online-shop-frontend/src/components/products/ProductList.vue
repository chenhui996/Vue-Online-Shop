<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <!-- 其他字段 -->
          <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
          <img :src="product.image" alt="" class="product__image">
          <button @click="addToCart(product)">加入购物车</button>
        </div>
      </template>
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
export default {
  name: "product-list",
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  //找数据源；
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  //调用添加商品的方法，方法写在store里，一个加，一个减
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", {
        product
      });
    }
  }
};
</script>
