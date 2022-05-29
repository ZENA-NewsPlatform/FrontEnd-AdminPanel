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
    id: ""
  },
  getters: {
    requests: (state) => state.requests,
    id: (state) => state.id
  },
  mutations: {
    FETCH_DATA: (state, requests) => (state.requests = requests),
    SET_ID: (state, id) => (state.id = id)
  },
  actions: {
    fetchData({ commit }) {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data.doc));
          commit("FETCH_DATA", response.data.data.doc);
          commit("SET_ID", response.data.data.doc.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

export default publisherVerification;
