import Vue from 'vue'
import App from './App.vue'
// import VueI18n from 'vue-i18n';
import router from './router'
import store from './store';
// import 'vue3-toastify/dist/vue3-toastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

Vue.config.productionTip = false
Vue.config.devtools = true

// const i18n = new VueI18n({
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: {
//     en: require('./locales/en.json'),
//     ar: require('./locales/ar.json')
//   }
// });

// Vue.use(VueI18n);
new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
