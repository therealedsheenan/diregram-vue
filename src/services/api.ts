import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const API_URL = "http://localhost:8000/api/1.0/"; // TODO: change to correct api server address

const Api = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource: string, slug = '') {
    return Vue.axios
      .get(`${resource}/${slug}`)
      .catch((error: Error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  post(resource: string, params: object, opts = {}) {
    return Vue.axios.post(`${resource}`, params);
  },
};

export default Api;
