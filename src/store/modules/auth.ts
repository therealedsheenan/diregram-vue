import axios from 'axios';

import Api from '@/services/api';
import { setUserToken, removeUserToken, getUserToken } from '@/helpers/auth';
import * as acts from '../types/actions';
import * as muts from '../types/mutations';

const state = {
  token: getUserToken() || '',
  user: {},
  isAuthenticating: true,
};

const getters = {
  isAuthed(state: any) {
    console.log(state.token);
    return !!state.token;
  },
  user(state: any) {
    return state.user;
  },
  isAuthenticating(state: any) {
    return state.isAuthenticating;
  },
  token(state: any) {
    return state.token;
  },
};

const actions = {
  [acts.REQUEST_LOGIN]({ commit }, params = '') {
    commit(muts.LOGIN_REQUEST, params);
    return Api.post('user/login', { user: params })
      .then((res: any) => {
        setUserToken(res.data.user.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.user.token}`;
        return commit(muts.LOGIN_SUCCESS, res.data.user);
      })
      .catch((error: any) => {
        commit(muts.LOGIN_FAILURE, error);
        throw new Error(error);
      });
  },
  [acts.REQUEST_LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      commit(muts.LOGOUT_REQUEST);
      removeUserToken();
      delete axios.defaults.headers.common['Authorization'];
      commit(muts.LOGOUT_SUCCESS);
      resolve();
    })
    .catch((error: Error) => commit(muts.LOGOUT_FAILURE, error));
  },
  [acts.REQUEST_SIGNUP]({ commit }, params = {}) {
    commit(muts.SIGNUP_REQUEST);
    return Api.post('user/sign-up', { user: params })
      .then((res: any) => {
        setUserToken(res.data.user.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.user.token}`;
        return commit(muts.SIGNUP_SUCCESS, res.data.user);
    })
      .catch((error: any) => {
        commit(muts.SIGNUP_FAILURE, error);
        throw new Error(error);
      });
  },
};

const mutations = {
  [muts.LOGIN_REQUEST](state: any) {
    state.isAuthenticating = true;
  },
  [muts.LOGIN_SUCCESS](state: any, payload: any) {
    state.isAuthenticating = false;
    state.token = payload.token;
    state.user = payload;
  },
  [muts.LOGIN_FAILURE](state: any, payload: any) {
    state.isAuthenticating = false;
    state.user = {};
  },
  [muts.LOGOUT_REQUEST](state: any) {
    state.isAuthenticating = true;
  },
  [muts.LOGOUT_SUCCESS](state: any) {
    state.isAuthenticating = false;
    state.user = {};
    state.token = '';
  },
  [muts.SIGNUP_REQUEST](state: any) {
    state.isAuthenticating = true;
  },
  [muts.SIGNUP_SUCCESS](state: any, payload: object) {
    state.isAuthenticating = false;
    state.token = payload.token;
    state.user = payload;
  },
  [muts.SIGNUP_FAILURE](state: any) {
    state.isAuthenticating = false;
    state.token = '';
    state.user = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
