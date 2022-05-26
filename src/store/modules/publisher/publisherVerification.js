import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");

var config = {
  method: "get",
  url: "v1/publisherChannelsRequest",
  headers: {
    Authorization: auth,
  },
};

const publisherVerification = {
  namespaced: true,
  state: {
    requests: {},
  },
  getters: {
    requests: (state) => state.requests
  },
  mutations: {
      FETCH_DATA: (state,requests) => (state.requests = requests)
  },
  actions: {
    fetchData({ commit }) {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data.doc));
          commit("FETCH_DATA",response.data.data.doc);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

export default publisherVerification;
