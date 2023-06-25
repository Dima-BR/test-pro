<template>
  <div>
  <div class="container">
    <nav class="navbar navbar-light">
      <div class="dropdown d-xl-none d-lg-none mr-auto">
        <img src="https://cdn-icons-png.flaticon.com/128/4167/4167978.png" data-toggle="dropdown" data-target="#navd" aria-haspopup="true" aria-expanded="false" width="25" height="25">
        <div class="dropdown-menu hb" aria-labelledby="navd">
          <router-link class="dropdown-item" to="/">Home</router-link>
          <router-link class="dropdown-item" to="/products">Products</router-link>
          <!-- <router-link class="dropdown-item" to="/">Language</router-link> -->
       
        </div>
        <!-- <div>
          <button @click="switchLanguage('en')">English</button>
          <button @click="switchLanguage('ar')">العربية</button>
        </div> -->
      </div>
      <!--Logo-->
        <router-link  class="navbar-brand py-0 pl-5" to="/">
          <img src="@/assets/fi-logo.svg" width="50" height="50">
        </router-link>
      <!--Header navigation-->
      <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
        <router-link class="pl-5" to="/">Home</router-link>
        <router-link class="px-5" to="/products">Products</router-link>
      </span>

      <router-link class="pl-5" to="/cart">
        <div class="bag" >
            <img class="pb-1" src="@/assets/cart.svg">
            <span class="mb-3" v-if="this.bagItemscount > 0">{{ bagItemscount }}</span>
        </div>
      </router-link>
    </nav>
    </div>
  </div>
</template>

<script>
import Cart from '@/Components/Cart.vue'

export default {
  name: 'Header',
  components: {
    Cart
  },
  computed: {
    bagItemscount() {
      return this.$store.getters.itemsNumber
    }
  },
  methods: {
    openCart() {
      this.$refs.cartMove.cartON()
    },
    // switchLanguage(language) {
    //   this.$emit('language-switch', language);
    // },
//     switchLanguage(locale) {
//       document.documentElement.setAttribute('lang', locale);
//       document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
// }
  }
}
</script>

<style>
nav {
  z-index:100;
}
.navbar {
  border-bottom: 1px solid #DCDCDC;
  background-color: #F8F8F8;
}

.close {
  position:relative;
  bottom:20px;
  left:10px;
  font-size: 31px;
  color: #000;
}
.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item.bc a:hover, .navbar-item.bc a:active {
  color: #FFD700;
}
.btn-sm{
  border-radius: 0;
}


.bag span {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    position: absolute;
    font-size: 15px;
    line-height: 1;
    padding: 2px 3px 3px 3px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    margin-left: -9px;
    bottom: 1rem;
}

.bag img {
  cursor: pointer;
  width: 30px;
  height: auto;
}

</style>
