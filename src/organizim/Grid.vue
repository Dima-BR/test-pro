<template>
  <div>
    <div class="container grid">
      <div class="row justify-content-center my-5">
        <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
          <div v-if="slicedCards.length === 0" class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 style="margin-left: 9rem; margin-right: 9rem">Sorry, we can't find a product with these features</h4>
          </div>
          <Card :CardArray="slicedCards" />
          <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
            <button type="button" @click="incCardNumber" class="btn btn-outline-secondary btn-lg btn-block">More +</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../organizim/Card.vue';

export default {
  name: 'Grid',
  components: {
    Card,
  },
  data() {
    return {
      showCards: 6,
      slicedCards: [],
    };
  },
  created() {
    this.loadItems();
  },
  computed: {
    cards() {
      return this.$store.getters.filteredItems;
    },
  },
  watch: {
    cards: {
      immediate: true,
      handler() {
        this.updateSlicedCards();
      },
    },
    showCards: {
      immediate: true,
      handler() {
        this.updateSlicedCards();
      },
    },
  },
  methods: {
    incCardNumber() {
      this.showCards += 6;
    },
    loadItems() {
      const jsonFile = this.$store.state.language === 'en' ? 'en.json' : 'ar.json';
      const jsonData = require(`../locales/${jsonFile}`);
      const items = jsonData.products.items;
      window.console.log("Grid items", items);
      this.$store.commit('setItems', items);
    },
    updateSlicedCards() {
      this.slicedCards = this.cards.slice(0, this.showCards);
    },
  },
};
</script>

<style>
.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-outline-secondary {
  border-radius: 0 !important;
}
</style>
