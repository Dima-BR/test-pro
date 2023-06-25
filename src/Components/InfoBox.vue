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
    <!-- Wat I want  -->
    <section class="py-5">
  <div class="container">
    <div class="row gx-5" v-for="it in information" :key="it.id">
      <aside class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" :href="it.img">
            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" :src="it.img" />
          </a>
        </div>
        <div class="d-flex justify-content-center mb-3">
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" >
            <img width="60" height="60" class="rounded-2" :src="it.img" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"  >
            <img width="60" height="60" class="rounded-2" :src="it.img" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"  >
            <img width="60" height="60" class="rounded-2" :src="it.img" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image"  >
            <img width="60" height="60" class="rounded-2" :src="it.img" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" >
            <img width="60" height="60" class="rounded-2" :src="it.img" />
          </a>
        </div>
        <!-- thumbs-wrap.// -->
        <!-- gallery-wrap .end// -->
      </aside>
      <main class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title text-dark">
            {{it.title}}
          </h4>
          <div class="d-flex flex-row my-3">
            <div class="text-warning mb-1 me-2">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              <span class="ms-1">
                4.5
              </span>
            </div>
            <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span class="text-success ms-2">In stock</span>
          </div>

          <div class="mb-3">
            <span class="h5">{{ it.price }} JD</span>
            <span class="text-muted">/per box</span>
          </div>

          <p>
            Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
            men.
          </p>

          <div class="row">
            <dt class="col-3">Type:</dt>
            <dd class="col-9">Regular</dd>

            <dt class="col-3">Color</dt>
            <dd class="col-9">Brown</dd>

            <dt class="col-3">Material</dt>
            <dd class="col-9">Cotton, Jeans</dd>

            <dt class="col-3">Brand</dt>
            <dd class="col-9">Reebook</dd>
          </div>

          <hr />

          <div class="row mb-4">
            <div class="col-md-4 col-6">
              <label class="mb-2">Size</label>
              <select class="form-select border border-secondary" style="height: 35px;">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <!-- col.// -->
            <div class="col-md-4 col-6 mb-3">
              <label class="mb-2 d-block">Quantity</label>
              <div class="control number text-center">
            <button class="decrement-button" @click="dec" style="border-right: 0.2px solid lightgrey;float:left;margin-right: 11px;">−</button>
            <span>{{ quan }}</span>
            <button class="increment-button" @click="inc" style="border-left: 0.2px solid lightgrey;margin-left: 16px;">+</button>
            <br><br>
          </div>
              <!-- <div class="input-group mb-3" style="width: 170px;">
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                  <i class="fas fa-minus"></i>
                </button>
                <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                  <i class="fas fa-plus"></i>
                </button>
              </div> -->
            </div>
          </div>
          <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
          <!-- <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a> -->
          <cart-button :item="it"></cart-button>
        </div>
      </main>
    </div>
  </div>
</section>
<!-- content -->
    <!-- End  -->
    
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
    switchLanguage(language) {
    if (language === 'en') {
      this.currentLanguage = 'en';
      this.translations = en;
      document.documentElement.dir = 'ltr'; // Set the document direction to LTR for English
    } else if (language === 'ar') {
      this.currentLanguage = 'ar';
      this.translations = ar;
      document.documentElement.dir = 'rtl'; // Set the document direction to RTL for Arabic
    }
  }
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
