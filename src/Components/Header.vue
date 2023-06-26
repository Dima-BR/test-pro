<template>
  <div>
 
    <!-- New design  -->
    <!-- Navbar -->
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <!-- <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a> -->
       <!--Logo-->
       <router-link  class="navbar-brand mt-2 mt-lg-0" to="/">
          <img src="@/assets/fi-logo.svg" width="50" height="50" loading="lazy">
        </router-link>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Dashboard</a> -->
          <router-link class="nav-link" to="/">
            <i class="bi bi-house"></i>
            Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Team</a> -->
          <router-link class="nav-link" to="/products">
            <i class="bi bi-box"></i>
            Products</router-link>
        </li>
          
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
      <!-- Cart -->
      <!-- Icon -->
      <!-- <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a> -->
      <router-link class="text-reset me-3 text-decoration-none" to="/cart">
            <i class="bi bi-cart"></i>
            
            <!-- <div class="bag" > -->
                <!-- <img class="pb-1" src="@/assets/cart.svg"> -->
                <span v-if="this.bagItemscount > 0">{{ bagItemscount }}</span>
            <!-- </div> -->
      </router-link>
       <!-- Avatar -->
       <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow text-decoration-none"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        <i class="bi bi-globe"></i>
        <span>{{this.$i18n.local }}YY</span>

        </a>
        <ul :class="getDropdownMenuClass()" aria-labelledby="navbarDropdownMenuAvatar">
        <li class="d-flex justify-content-between align-items-center px-3">
          <!-- <button @click="switchLanguage('en')" type="button" class="btn btn-secondary btn-sm">English</button> -->
          <button @click="switchLanguage('en')" type="button" class="btn  btn-sm active btn-primary">English</button>

          <button @click="switchLanguage('ar')" type="button" class="btn btn-secondary btn-sm">العربية</button>
        </li>
        <li>
          <a class="dropdown-item" href="#">Settings</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Logout</a>
        </li>
      </ul>

        <!-- <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            
          <button @click="switchLanguage('en')" type="button" class="btn btn-secondary btn-sm">English</button>
          <button @click="switchLanguage('ar')" type="button" class="btn btn-secondary btn-sm">العربية</button>
       
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul> -->
      </div>
      
    
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
    <!-- End -->
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
    
    switchLanguage(locale) {
      this.$i18n.local = locale;
      document.documentElement.setAttribute('lang', locale);
      document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
},
getDropdownMenuClass() {
    return this.$i18n.local === 'ar' ? 'dropdown-menu dropdown-menu-start' : 'dropdown-menu dropdown-menu-end';
  },

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

button.btn.active {
  color: white;
  background-color: blue; /* Replace with your desired color */
}

</style>
