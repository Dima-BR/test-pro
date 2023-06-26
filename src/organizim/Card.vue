<template>
  <div>
    <transition-group name="fade" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" tag="div">
      <div v-for="item in CardArray" class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" :key="item.id">
          <div class="card">
            <router-link to="/Info" @click="sendInfo(item)" class="text-decoration-none">

            <div class="mask">
              <div class="d-flex justify-content-start align-items-start h-100">
                  <h5 class="d-flex justify-content-start align-items-start h-100">
                    <span class="badge bg-primary">New</span>
                    <span class="badge bg-danger ms-2">-10%</span>
                  </h5>
              </div>
            </div>
            <img class="card-img-top" :src="item.img" :alt="item.title">
            <div class="card-body text-black">
              <h5 class="card-title">{{ item.title }}</h5>
              <h6 class="mb-3">
              <s>$666.99</s><strong class="ms-2 text-danger">${{ item.price }}</strong>
            </h6>
            </div>
  </router-link>

          </div>
      </div>
    </transition-group>
    
  </div>

</template>

<script>
export default {
  props: ['CardArray'],
  name: 'Card',
  created() {
    this.loadItems();
  },
  methods: {
    addtoCart(it) {
     this.$store.commit('inCart', it)
    },
    sendInfo(it) {
     this.$store.commit('addtoInfo', it)
    },
    loadItems() {
      const jsonFile = this.$store.state.language === 'en' ? 'en.json' : 'ar.json';
      window.console.log("this.$store.state.language", this.$store.state.language);
      const jsonData = require(`../locales/${jsonFile}`);
      const items = jsonData.products.items;
      window.console.log("Card items", items);
      this.$store.commit('setItems', items);
    },
  }
}
</script>

<style>
/* transition Group style */
.fade-move {
  transition: transform 1s;
}
/* Card Style */
.card {
  transition: 500ms;
  position: relative;
  overflow: hidden;
}

.card img {
  z-index: 1;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover, .card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}
</style>
