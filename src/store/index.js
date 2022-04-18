import { createStore } from "vuex";
import axios from 'axios';
import largeSidebar from "./modules/largeSidebar";
import accounts from "./modules/admin/accounts";
import totalStats from "./modules/statistics/totalStats"



const getDefaultState = () => {
  return {
    token: "",
    user: {},
  };
};
export default createStore({
  state: getDefaultState(),

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },

  actions: {
    
    login: ({ commit }, { token, user}) => {
      commit("SET_TOKEN", token);
      commit("SET_USER", user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },

    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },

  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.user;
    },
  },

  modules: {
    largeSidebar,
    accounts,
    totalStats
  },
});
