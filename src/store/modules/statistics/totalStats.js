import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");
var configTotal = {
  method: "get",
  url: "v1/systemStats",
  headers: {
    Authorization: auth,
  },
};

var configDaily = {
  method: "get",
  url: "v1/systemStats",
  headers: {
    Authorization: auth,
  },
};

const totalStats = {
  namespaced: true,
  state: {
    totalStats: {},
    dailyStats: {}
  },

  getters: {
    allTotalStats: (state) => state.totalStats,
  },

  mutations: {
    FETCH_TOTAL_STATS: (state, totalStats) => (state.totalStats = totalStats),
    FETCH_DAILY_STATS: (state, dailyStats) => (state.dailyStats = dailyStats)
  },

  actions: {
    //A mutation committed to an action that fetches the total stats
    async fetchTotalStats({ commit }) {
      axios(configTotal)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data.doc));
          commit("FETCH_TOTAL_STATS", response.data.data.doc);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

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

export default totalStats;
