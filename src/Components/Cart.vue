<template>
  <div class="cart">
    <div class="cart-menu">
      <h1 class="text-center">Cart</h1>
      <hr>

      <!-- <transition name="fade"> -->
        <div v-if="cartContent.length === 0" class="text-center font-italic">
          Your cart is empty, try to Add stuff.
        </div>
      <!-- </transition> -->

      <!-- <transition-group name="fade"> -->
        <div class="row" v-for="thing in cartContent" :key="thing.id">
          <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <img :src="thing.img" style="width: 90px;">
          </div>
          <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <h4>{{ thing.title }}</h4>
            <h6>{{ thing.price }}</h6>
          </div>
          <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
            <span class="remove-btn" @click="removeThing(thing.id)">remove</span>
          </div>
        </div>
      <!-- </transition-group> -->

      <hr v-if="cartContent.length !== 0">
      <div class="row justify-content-between" style="background:#7dcf85;padding:10px 10px 10px 10px" v-if="cartPrice !== undefined">
        <div class="flex-column pl-3">
          <h4>Total</h4>
        </div>
        <div class="flex-column pr-3">
          <h4>${{ cartPrice }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartContent() {
      return this.$store.state.cartItems;
    },
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    removeThing(id) {
      this.$store.commit('outCart', id);
    },
  },
};
</script>

<style scoped>
.cart {
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
  border-color: white;
}

.row {
  margin-top: 10px;
  margin-bottom: 10px;
}

.remove-btn {
  border-radius: 50%;
  content: url('../assets/multiply.png');
}

.remove-btn:hover {
  background-color: grey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
