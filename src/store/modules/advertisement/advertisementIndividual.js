import axios from 'axios'

var auth = "Bearer " + localStorage.getItem("token");
var config ={
  method: 'get',
  url: 'v1/advertisements/62384bd58358191e7856bc6a',
  headers: { 
    Authorization: auth,
  }
}
const adIndividual = {
    namespaced: true,

    state: {
        ad: {},
        id: 0,
      },
      getters: {
        ad: (state) => state.ad,
        id: (state) => state.id,
      },
      mutations: {
        FETCH_AD: (state, ad) => (state.ad = ad),
        ID_DATA: (state, id) =>
          (state.id = id),
      },
      actions: {
        async fetchAd({commit}) {
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              commit("FETCH_AD", response.data.data.doc);
              commit("ID_DATA", response.data.data.doc.id);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },
}

export default adIndividual