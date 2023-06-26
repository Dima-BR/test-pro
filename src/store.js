import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// REMOVE CLASS FROM items ARRAY
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    language: 'en',// Default language is English
    filter: null,
    items: [],
      },
  plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    },
    filteredItems(state) {
      return state.items.filter((item) => item.language === state.language);
    },
    // filteredItems(state) {
    //   if (!state.filter) {
    //     return state.items;
    //   }
    //   // Apply filtering logic based on the filter property
    //   // For example:
    //   return state.items.filter(item => item.category === state.filter);
    // },
  },

  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    },
    setLanguage(state, language) {
      state.language = language;
    },
    setItems(state, items) {
      state.items = items;
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
  },
})
