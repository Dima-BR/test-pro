<template>
  <div>
    <p>{{ translations.greeting }}</p>
    <p>{{ translations.welcome }}</p>
    <div class="row mb-5" v-for="it in information" :key="it.id">
      <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <img class="img-fluid" :src="it.img">
      </div>

      <div class="col6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-start">
        <div class="info pt-xl-0 pt-lg-0 pt-5">
          <span class="float-left pr-3">★★★★★</span><h6 style="width:190px;">3 reviews</h6>
          <h1 class="font-weight-bold text-uppercase pt-3">{{ it.title }}</h1>
          <h4>${{ it.price }}</h4>
          <br><br><br>
          <div class="control number text-center">
            <button class="decrement-button" @click="dec" style="border-right: 0.2px solid lightgrey;float:left;margin-right: 11px;">−</button>
            <span>{{ quan }}</span>
            <button class="increment-button" @click="inc" style="border-left: 0.2px solid lightgrey;margin-left: 16px;">+</button>
            <br><br>
          </div>
          <cart-button :item="it"></cart-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartButton from '../Components/CartButton.vue';
import ar from '../locales/ar.json';
import en from '../locales/en.json';

export default {
  props: ['information'],
  name: 'InfoBox',
  components: {
    CartButton,
  },
  data() {
    return {
      quan: 1,
      currentLanguage: 'en',
    // translations: en,
    translations: {}
    };
  },
  methods: {
    inc() { // Info box Increment button
      if (this.quan <= 8) {
        this.quan++;
      }
    },
    dec() { // Info box Decrement button
      if (this.quan >= 2) {
        this.quan--;
      }
    },
  },
};
</script>

<style scoped>
.img-fluid {
  min-width: 90% !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.control.number {
  border: 0.2px solid lightgrey;
  font-size: 19px;
  font-weight: bold;
  height: 35px;
  width: 155px;
  margin-bottom: 30px;
}

.control.number button {
  border: none;
  background: inherit;
  width: 56px;
  height: 35px;
  outline-style: none;
}

.control.number button:active {
  background-color: lightgrey;
}

.control.number h5 {
  margin-left: 13px;
  margin-right: 13px;
}
</style>
