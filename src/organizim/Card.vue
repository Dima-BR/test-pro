<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-3 col-md-4 col-sm-6 col-xs-12"
          v-for="item in CardArray"
          :key="item.id"
        >
          <div class="product-grid">
            <div class="product-image">
              <!-- <router-link
                to="/product/${item.id}"
                @click="sendInfo(item)"
                class="text-decoration-none image"
              > -->

              <router-link
                to="/info"
                class="text-decoration-none image"
              >
                <!-- <a href="#" class="image"> -->
                <img class="pic-1" :src="item.img" :alt="item.title" />
                <img class="pic-2" :src="item.imagehover" />
                <!-- </a> -->
              </router-link>

              <span class="product-sale-label">{{ item.tag }}</span>
              <ul class="social">
                <li>
                  <router-link
                    to="/product/${item.id}"
                    @click="sendInfo(item)"
                    data-tip="Quick View"
                    ><i class="bi bi-eye"></i
                  ></router-link>
                </li>
              </ul>
              <div class="product-rating">
                <ul class="rating d-flex">
                  <li v-for="star in item.rate" :key="star">
                    <i class="bi bi-star-fill"></i>
                  </li>
                </ul>
              <button type="button" class="btn btn-lg add-to-cart text-decoration-none" @click="addtoCart(item)">ADD TO CART</button>
              </div>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#" class="text-decoration-none">{{
                  $t(item.title)
                }}</a>
              </h3>
              <div class="price">
                <span v-if="item.pricebefore"
                  >{{ item.currency }} {{ item.pricebefore }}</span
                >{{ item.price }} {{ item.currency }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["CardArray"],
  name: "Card",
  created() {
    this.loadItems();
  },
  methods: {
    addtoCart(it) {
      this.$store.commit("inCart", it);
    },
    sendInfo(it) {
      this.$store.commit("addtoInfo", it);
    },
    loadItems() {
      const jsonFile =
        this.$store.state.language === "en" ? "en.json" : "ar.json";
      window.console.log(
        "this.$store.state.language",
        this.$store.state.language
      );
      const jsonData = require(`../locales/${jsonFile}`);
      const items = jsonData.products.items;
      window.console.log("Card items", items);
      this.$store.commit("setItems", items);
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
  //   computed: {
  //   translatedTitle() {
  //     return this.$t('item.title');
  //   }
  // },
};
</script>

<style scoped>
.product-grid {
  font-family: "Roboto", sans-serif;
  text-align: center;
  transition: all 0.5s;
}
.product-grid:hover {
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3);
}
.product-grid .product-image {
  position: relative;
  overflow: hidden;
}
.product-grid .product-image a.image {
  display: block;
}
.product-grid .product-image img {
  width: 100%;
  height: auto;
}
.product-image .pic-1 {
  opacity: 1;
  backface-visibility: hidden;
  transition: all 0.5s;
}
.product-grid:hover .product-image .pic-1 {
  opacity: 0;
}
.product-image .pic-2 {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
}
.product-grid:hover .product-image .pic-2 {
  opacity: 1;
}
.product-grid .product-sale-label {
  color: #fff;
  background: #f99820;
  font-size: 14px;
  font-style: italic;
  text-transform: uppercase;
  width: 55px;
  height: 55px;
  line-height: 55px;
  border-radius: 50px;
  position: absolute;
  top: 10px;
  left: 10px;
}
.product-grid .social {
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 15px;
  right: 7px;
}
.product-grid .social li {
  transform: translateX(60px);
  transition: all 0.3s ease 0.3s;
}
.product-grid .social li:nth-child(2) {
  transition: all 0.3s ease 0.4s;
}
.product-grid:hover .social li {
  transform: translateX(0);
}
.product-grid .social li a {
  color: #707070;
  background: #fff;
  font-size: 16px;
  line-height: 40px;
  width: 40px;
  height: 40px;
  margin: 0 0 7px;
  border-radius: 50px;
  display: block;
  transition: all 0.3s ease 0s;
}
.product-grid .social li a:hover {
  color: #6da84a;
}
.product-grid .product-rating {
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  padding: 10px;
  opacity: 0;
  position: absolute;
  bottom: -60px;
  left: 0;
  transition: all 0.2s ease-in-out 0s;
}
.product-grid:hover .product-rating {
  opacity: 1;
  bottom: 0;
}
.product-grid .rating {
  padding: 0;
  margin: 0;
  list-style: none;
  float: left;
}
.product-grid .rating li {
  color: #f99820;
  font-size: 13px;
}
.product-grid .rating li.far {
  color: #f99820;
}
.product-grid .add-to-cart {
  color: #f99820;
  font-size: 14px;
  font-weight: 600;
  /* border-bottom: 1px solid #6DA84A; */
  float: right;
  transition: all 0.2s ease-in-out 0s;
}
.product-grid .add-to-cart:hover {
  color: #09264a;
  border-bottom: 1px solid;
  border-color: #09264a;
  transition: all 0.2s ease-in-out 0s;
}
.product-grid .product-content {
  background: #f5f5f5;
  padding: 15px;
}
.product-grid .title {
  font-size: 18px;
  text-transform: capitalize;
  margin: 0 0 5px;
}
.product-grid .title a {
  color: #09264a;
  transition: all 500ms;
}
.product-grid .title a:hover {
  color: #f99820;
}
.product-grid .price {
  color: #a8a7a7;
  font-size: 17px;
  text-decoration: underline;
}
.product-grid .price span {
  text-decoration: line-through;
  margin-right: 5px;
  display: inline-block;
  opacity: 0.6;
}
@media only screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 40px;
  }
}
/* New by me */
.product-grid {
  margin-bottom: 28px;
}

.product-grid .product-image {
  margin: 0 10px;
}

.product-grid .product-content {
  margin: 0 10px;
}
.product-grid .product-image {
  height: 260px;
}

.product-grid .product-content {
  height: 80px;
}
@media (min-width: 768px) and (man-width: 1024px) {
  .product-grid .product-image {
    height: 200px;
  }
}
</style>

