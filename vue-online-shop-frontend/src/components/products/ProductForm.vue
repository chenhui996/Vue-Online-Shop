<template>
  <div class="productInfo">
    <el-form
      class="form"
      ref="form"
      :model="model"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="Name">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="modelData.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer ">
        <el-select
          v-model="modelData.manufacturer.name"
          clearable
          placeholder="请选择制造商"
        >
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image ">
        <el-input v-model="modelData.image"></el-input>
      </el-form-item>
      <el-form-item label="Description ">
        <el-input type="textarea" v-model="modelData.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" native-type="submit" @click="onSubmit"
          >Update Product</el-button
        >
        <el-button v-else @click="onSubmit">Add Product</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelData: { manufacturer: { name: "" } }
    };
  },
  props: ["model", "manufacturers", "isEditing"],
  created() {
    const product = this.model;
    this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  },
  watch: {
    model(val, oldval) {
      this.modelData = val;
    }
  },
  computed: {
    loading() {
      return this.$store.state.showLoader
    }
  },
  methods: {
    onSubmit() {
      const manufacturer = this.manufacturers.find(
        item => item.name === this.modelData.manufacturer.name
      );
      this.modelData.manufacturer = manufacturer;
      this.$emit("save-product", this.modelData);
    }
  }
};
</script>
<style>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
</style>
