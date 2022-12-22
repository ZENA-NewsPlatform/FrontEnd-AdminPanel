import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");

var configTotal = {
    method: 'get',
    url: 'v1/publisherChannelStats?statType=total',
    headers: {
        Authorization: auth
    }
};

const publisherStatistics =
{
    namespaced: true,
  state: {
    totalStats: {},
    // dailyStats:{},
  },

  getters: {
    totalStats: (state) => state.totalStats,
    // dailyStats: (state) => state.dailyStats,
  },

  mutations: {
    FETCH_TOTAL_STATS: (state, totalStats) => (state.totalStats = totalStats),
    // FETCH_DAILY_STATS: (state, dailyStats) => (state.dailyStats = dailyStats)
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



    },


}

export default publisherStatistics