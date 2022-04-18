import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");
var config = {
  method: "get",
  url: "v1/admins/publisherchannels",
  headers: {
    Authorization: auth,
  },
};

const publisher = {
  namespaced: true,
  state: {
    publishers: {},
    resultsCounter: 0,
  },
  getters: {
    publishers: (state) => state.publishers,
    resultsCounter: (state) => state.resultsCounter,
  },
  mutations: {
    FETCH_PUBLISHER: (state, publishers) => (state.publishers = publishers),
    RESULTS_COUNTER: (state, resultsCounter) =>
      (state.resultsCounter = resultsCounter),
  },
  actions: {
    async fetchPublisher({commit}) {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          commit("FETCH_PUBLISHER", response.data.data.doc);
          commit("RESULTS_COUNTER", response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
export default publisher;
