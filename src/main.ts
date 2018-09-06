import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/';
import Api from './services/api';
import './registerServiceWorker';

Vue.config.productionTip = false;

// initialize api service
Api.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
