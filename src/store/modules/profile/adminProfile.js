import axios from "axios";
var auth = "Bearer " + localStorage.getItem("token");
var config = {
  method: "get",
  url: "v1/admins/me",
  headers: {
    Authorization: auth,
  },
};


const adminData = {
  namespaced: true,
  state: {
    adminData: {},
  },

  getters: {
    adminData: (state) => state.adminData,
  },

  mutations: {
    FETCH_ADMIN_DATA: (state, adminData) => (state.adminData = adminData),
  },

  actions: {
    //A mutation committed to an action that fetches the total stats
    async fetchAdminData({ commit }) {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data.doc));
          commit("FETCH_ADMIN_DATA", response.data.data.doc);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },


};

export default adminData;
