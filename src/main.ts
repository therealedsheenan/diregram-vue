import '@babel/polyfill';
import Vue from 'vue';
import Axios from 'axios';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/';
import Api from './services/api';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

// initialize api service
Api.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
