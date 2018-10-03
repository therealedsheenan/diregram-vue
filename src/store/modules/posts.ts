import Api from '../../services/api';
import * as acts from '../types/actions';
import * as muts from '../types/mutations';

const state = {
  data: [],
  isLoading: true,
  status: '',
};

const getters = {
  postsIsLoading(state: any) {
    return state.isLoading;
  },
  posts(state: any) {
    return state.data;
  },
};

const actions = {
  [acts.FETCH_ALL_POSTS]({ commit }, params = '') {
    commit(muts.ALL_POSTS_REQUEST);
    return Api.get(params ? `user/${params}/posts` : 'post/all')
      .then((data: any) => {
        return commit(muts.ALL_POSTS_SUCCESS, data);
      })
      .catch((error: any) => {
        commit(muts.ALL_POSTS_FAILURE, error);
        throw new Error(error);
      });
  },
  [acts.REQUEST_NEW_POST]({ commit }, params: object) {
    commit(muts.NEW_POST_REQUEST);
    return Api.post('post', params)
      .then((data: object) => {
        return commit(muts.NEW_POST_SUCCESS, data);
      })
      .catch((error: any) => {
        commit(muts.NEW_POST_FAILURE, error);
        throw new Error(error);
      });
  },
};

const mutations = {
  [muts.ALL_POSTS_REQUEST](state: any) {
    state.isLoading = true;
  },
  [muts.ALL_POSTS_FAILURE](state: any) {
    state.isLoading = false;
  },
  [muts.NEW_POST_REQUEST](state: any) {
    state.isLoading = true;
  },
  [muts.ALL_POSTS_SUCCESS](state: any, payload: any) {
    state.data = payload.data.posts;
    state.isLoading = false;
  },
  [muts.NEW_POST_SUCCESS](state: any, payload: any) {
    state.data.unshift(payload.data.post);
    state.isLoading = false;
  },
  [muts.NEW_POST_FAILURE](state: any) {
    state.isLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
