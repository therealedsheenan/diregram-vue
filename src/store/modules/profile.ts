import axios from 'axios';

import Api from '@/services/api';
import { setUserToken, removeUserToken, getUserToken } from '@/helpers/auth';
import * as acts from '../types/actions';
import * as muts from '../types/mutations';

const state = {
  data: {},
  isLoading: true,
};

const getters = {
  profileIsLoading(state: any) {
    return state.isLoading;
  },
  profile(state: any) {
    return state.data;
  },
};

const actions = {
  [acts.REQUEST_PROFILE]({ commit }, params = '') {
    commit(muts.PROFILE_REQUEST, params);
    return Api.get(`user/profile/${params}`)
      .then((res: any) => {
        return commit(muts.PROFILE_SUCCESS, res.data.user);
      })
      .catch((error: any) => {
        commit(muts.PROFILE_FAILURE, error);
        throw new Error(error);
      });
  },
};

const mutations = {
  [muts.PROFILE_REQUEST](state: any) {
    state.isLoading = true;
  },
  [muts.PROFILE_SUCCESS](state: any, payload: any) {
    state.isLoading = false;
    state.data = payload;
  },
  [muts.PROFILE_FAILURE](state: any, payload: any) {
    state.isLoading = false;
    state.data = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
