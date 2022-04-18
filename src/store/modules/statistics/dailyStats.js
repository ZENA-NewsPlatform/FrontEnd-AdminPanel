import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");

var configDaily = {
  method: "get",
  url: "v1/systemStats",
  headers: {
    Authorization: auth,
  },
};

const dailyStats = {
  namespaced: true,
  state: {
    dailyStats: {}
  },

  getters: {
    dailyStats: (state) =>state.dailyStats
  },

  mutations: {
       FETCH_DAILY_STATS: (state, dailyStats) => (state.dailyStats = dailyStats)
  },

  actions: {
    async fetchDailyStat({ commit }) {
      axios(configDaily)
        .then(function (response) {
          commit("FETCH_DAILY_STATS,", response.data.data.doc);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },


};

export default dailyStats;
