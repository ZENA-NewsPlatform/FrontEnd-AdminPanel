import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");
var configTotal = {
  method: "get",
  url: "v1/systemStats?statType=total",
  headers: {
    Authorization: auth,
  },
};
var configDay = {
  method: "get",
  url: "v1/systemStats?statType=day",
  headers: {
    Authorization: auth,
  },
};
var configWeekly = {
  method: "get",
  url: "v1/systemStats?date[gte]=2022-06-16&fields=PublishedNewsContent,date",
  headers: {
    Authorization: auth,
  },
};

const totalStats = {
  namespaced: true,
  state: {
    totalStats: {},
    dailyStats:{},
    weeklyStats:{},
  },

  getters: {
    totalStats: (state) => state.totalStats,
    dailyStats: (state) => state.dailyStats,
    weeklyStats: (state) => state.weeklyStats,
  },

  mutations: {
    FETCH_TOTAL_STATS: (state, totalStats) => (state.totalStats = totalStats),
    FETCH_DAILY_STATS: (state, dailyStats) => (state.dailyStats = dailyStats),
    FETCH_DAILY_STATS: (state, weeklyStats) => (state.weeklyStats = weeklyStats),

  },

  actions: {
    //A mutation committed to an action that fetches the total stats
    async fetchTotalStats({commit}) {
      axios(configTotal)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data.doc));
          commit("FETCH_TOTAL_STATS", response.data.data.doc);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //A mutation committed to an action that fetches the total stats
    async fetchWeeklyStats({commit}) {
      axios(configWeekly)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data.doc));
          commit("FETCH_WEEKLY_STATS", response.data.data.doc);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async fetchDailyStats({commit}) {
      axios(configDay)
      .then(function (response){
        commit("FETCH_DAILY_STATS",response.data.data.doc);
      })
      .catch(function(error){
        console.log(error);
      });
    },

  },
};

export default totalStats;
