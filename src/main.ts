import '@babel/polyfill';
import Vue from 'vue';
import Axios from 'axios';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/';
import Api from './services/api';
import { getUserToken } from './helpers/auth';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
if (getUserToken()) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${getUserToken()}`;
}

// initialize api service
Api.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
