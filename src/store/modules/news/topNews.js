import axios from'axios';

var auth = "Bearer " + localStorage.getItem("token");
var config = {
  method: 'get',
  url: 'v1/news?sort=viewCount&limit=3',
  headers: {
    Authorization: auth,
  }
};

const topNews = {
  namespaced: true,
  state: {
    topNews: {},
  },

  getters: {
    topNews: (state) => state.topNews,
  },

  mutations: {
    FETCH_TOP_NEWS: (state, topNews) => (state.topNews = topNews)
  },

  actions: {
    fetchTopNews({commit}) {
      axios(config)
        .then(function (response) {
          console.log("TOP NEWS====>"+JSON.stringify(response.data.data.news));
          commit("FETCH_TOP_NEWS",response.data.data.news)

        })
        .catch(function (error) {
          console.log(error);
        });

    }
  },
};

export default topNews;
