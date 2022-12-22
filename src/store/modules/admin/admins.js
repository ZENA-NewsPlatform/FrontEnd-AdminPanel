import axios from'axios';

var auth = "Bearer " + localStorage.getItem("token");
var config = {
  method: 'get',
  url: '/v1/admins?page=admin&limit=5&sort=name',
  headers: {
    Authorization: auth,
  }
};

const admins = {
  namespaced: true,
  state: {
    adminsList: {},
  },
  getters: {
    adminsList: (state) => state.adminsList,
  },
  mutations: {
    FETCH_ADMINS_LIST: (state, adminsList) => (state.adminsList = adminsList)
  },
  actions: {
    fetchAdminsList({commit}) {
      axios(config)
        .then(function (response) {
          console.log("ADMINS====>"+JSON.stringify(response.data.data.doc));
          commit("FETCH_ADMINS_LIST",response.data.data.doc)

        })
        .catch(function (error) {
          console.log(error);
        });

    }
  },
};

export default admins;
