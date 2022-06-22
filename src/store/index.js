import { createStore } from "vuex";
import axios from 'axios';
import largeSidebar from "./modules/largeSidebar";
import accounts from "./modules/admin/admins";
import totalStats from "./modules/statistics/totalStats";
import dailyStats from "./modules/statistics/dailyStats";
import profile from './modules/profile/adminProfile';
import advertisement from './modules/advertisement/advertisement';
import publisher from './modules/publisher/publisher';
import publisherIndividual from './modules/publisher/publisherIndividual';
import adIndividual from "./modules/advertisement/advertisementIndividual";
import publisherVerification from "./modules/publisher/publisherVerification";
import publisherStatistics from "./modules/statistics/publisherStatistics";
import admins from "./modules/admin/admins"
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
    totalStats,
    dailyStats,
    profile,
    advertisement,
    publisher,
    publisherIndividual,
    adIndividual,
    publisherVerification,
    publisherStatistics,
    admins
  },
});