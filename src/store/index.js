import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      age: 24,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    updateUser(state, { item, value }) {
      state[item] = value;
    },
  },
});

export default store;
