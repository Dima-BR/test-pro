<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style="position: sticky; overflow: hidden; top: 0"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler mx-3"
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
        <div
          class="collapse navbar-collapse mx-3 ps-3"
          id="navbarSupportedContent"
          :class="{ show: navbarOpen }"
        >
          <!--Logo-->
          <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2361/2361624.png"
              width="50"
              height="50"
              loading="lazy"
            />
          </router-link>
          <!-- Left links -->
          <ul class="navbar-nav mb-2 mb-lg-0 p-0">
            <li class="nav-item px-0 px-lg-4">
              <!-- <a class="nav-link" href="#">Dashboard</a> -->
              <router-link class="primary nav-link " to="/" @click="closeNavbar">
                <i class="bi bi-house"></i>
                Home</router-link
              >
            </li>
            <li class="nav-item px-0 px-lg-4">
              <!-- <a class="nav-link" href="#">Team</a> -->
              <router-link
                class="nav-link primary"
                to="/products"
                @click="closeNavbar"
              >
                <i class="bi bi-box"></i>
                Products</router-link
              >
            </li>
            <li class="nav-item px-0 px-lg-4">
              <!-- <a class="nav-link" href="#">Team</a> -->
              <router-link class="nav-link primary" to="/" @click="closeNavbar">
                <i class="bi bi-share"></i>
                Contact</router-link
              >
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="d-flex align-items-center mx-3 ps-3">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-0">
            <li class="nav-item">
              <!-- Cart -->
              <router-link class="text-reset text-decoration-none" to="/cart">
                <i class="bi bi-cart fs-5"></i>
                <span v-if="this.bagItemscount > 0">{{ bagItemscount }}</span>
              </router-link>
              <span class="justify-content-between align-items-center px-1">
                <span
                  @click="switchLanguage('en')"
                  type="button"
                  class="m-1"
                  :class="{ active: selectedLanguage === 'en' }"
                  >EN</span
                >
                <span class="divide">|</span>
                <span
                  @click="switchLanguage('ar')"
                  type="button"
                  class="m-1"
                  :class="{ active: selectedLanguage === 'ar' }"
                  >AR</span
                >
              </span>
            </li>
          </ul>
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
import Cart from "@/Components/Cart.vue";

export default {
  name: "Header",
  data() {
    return {
      selectedLanguage: "en",
      navbarOpen: false, // Initialize the navbar toggler as closed
      //     // dropdownMenuClass: '', // Initialize with an empty class
    };
  },
  components: {
    Cart,
  },
  computed: {
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
    //   getDropdownMenuClass() {
    // if (document.documentElement.getAttribute('dir') === 'rtl') {
    //   return 'dropdown-menu dropdown-menu-start';
    // } else {
    //   return 'dropdown-menu dropdown-menu-end';
    // }
    // },
  },
  methods: {
    closeNavbar() {
      this.navbarOpen = false; // Close the navbar toggler
      // Listen for click events outside of the navbar
      document.addEventListener("click", (event) => {
        // Check if the click event was outside of the navbar
        if (event.target.closest(".navbar") === null) {
          this.navbarOpen = true; // Re-open the navbar toggler
        }
      });
    },
    openCart() {
      this.$refs.cartMove.cartON();
    },

    switchLanguage(locale) {
      this.$i18n.local = locale;
      window.console.log("locale", locale);
      document.documentElement.setAttribute("lang", locale);
      document.documentElement.setAttribute(
        "dir",
        locale === "ar" ? "rtl" : "ltr"
      );

      this.selectedLanguage = locale;
      // Perform any other language-related logic here

      window.console.log("Selected Language:", this.selectedLanguage);
    },
    getDropdownMenuClass() {
      return this.$i18n.local === "ar"
        ? "Dimaaaa dropdown-menu dropdown-menu-start"
        : "dropdown-menu dropdown-menu-end dididididid";
    },
    // watch: {
    //   '$i18n.locale': {
    //     immediate: true, // Trigger the watcher immediately on component mount
    //     handler(locale) {
    //       this.dropdownMenuClass = locale === 'ar' ? 'dropdown-menu dropdown-menu-start' : 'dropdown-menu dropdown-menu-end';
    //     },
    //   },
    // },
    switchLanguageTest() {
      // You can perform language-specific logic or update language-related variables here
      // For example, you can set the locale, update translation strings, or make API requests
      // based on the selected language

      // For this example, we're just console logging the selected language
      window.console.log("Selected Language:", this.selectedLanguage);
    },
  },
};
</script>

<style>
nav {
  z-index: 100;
}

.navbar {
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f8f8;
}

.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}

.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item.bc a:hover,
.navbar-item.bc a:active {
  color: #ffd700;
}

.btn-sm {
  border-radius: 0;
}

.bag span {
  background-color: #6394f8;
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
  background-color: blue;
  /* Replace with your desired color */
}

.custom-dir-menu {
}

.divide {
  color: #fd7e14;
}

.active {
  color: orange;
}
</style>
