<template>
    <div>
      <h1>{{ product.title }}</h1>
      <img :src="product.image" :alt="product.title" />
      <!-- Other product details -->
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('products', ['getProductById']),
      product() {
        const productId = this.$route.params.id;
        window.console.log("productId", productId);
        return this.getProductById(productId);
      },

    },
  };
  </script>
  