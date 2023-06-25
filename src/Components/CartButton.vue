<template>
    <button class="add-to-cart-button" @click="addtoCart(item, item.id)">ADD TO CART</button>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
    methods: {
      addtoCart() {
        this.$store.commit('inCart', this.item, this.item.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .add-to-cart-button {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    width: 155px;
    height: 70px;
    background-color: #2c3539;
    color: #fff;
    font-size: 15px;
    padding: 0px 30px;
    cursor: pointer;
    position: relative;
    top: 0;
    z-index: 10;
    border: none;
    box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  .add-to-cart-button:hover,
  .add-to-cart-button:focus {
    background-color: inherit;
    color: black;
  }
  </style>
  