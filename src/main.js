import Vue from 'vue'
import './assets/css/reset.css';

import App from './App.vue'
import VueI18n from 'vue-i18n';
import router from './router'
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons';
import './assets/css/style.css';
// import Roboto from '@fortawesome/vue-fontawesome';

import ar from './locales/ar.json'
import en from './locales/en.json'

// Import the Roboto font family.
// import 'roboto/dist/css/roboto.min.css';

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en, ar
  }
});

new Vue({
  router, store,i18n,
  render: h => h(App)
}).$mount('#app')
