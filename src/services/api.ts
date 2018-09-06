import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const API_URL = "http://localhost:3000"; // TODO: change to correct api server address

const Api = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  }
};

export default Api;
