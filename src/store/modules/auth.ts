import Api from '../../services/api';
import * as acts from '../types/actions';
import * as muts from '../types/mutations';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  isAuthenticating: true,
};

const getters = {
  isAuthed() {
    return !!state.user;
  },
  user() {
    return state.user;
  },
  isAuthenticating() {
    return state.isAuthenticating;
  },
  token() {
    return state.token;
  },
};

const actions = {
  [acts.REQUEST_LOGIN]({ commit }, params = '') {
    commit(muts.LOGIN_REQUEST, params);
    return Api.post('user/login', { user: params })
      .then((data: any) => {
        return commit(muts.LOGIN_SUCCESS, data);
      })
      .catch((error: any) => {
        commit(muts.LOGIN_FAILURE, error);
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
    state.user = payload.data.user;
  },
  [muts.LOGIN_FAILURE](state: any, payload: any) {
    state.isAuthenticating = false;
    state.user = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
