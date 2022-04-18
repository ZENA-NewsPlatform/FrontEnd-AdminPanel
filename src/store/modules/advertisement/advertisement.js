import axios from 'axios'
var config = {
  method: "get",
  url: "/v1/advertisements",
  headers: {},
};


const advertisement = {
  namespaced: true,

  state: {
      adData:{},
      resultsCounter:0
    },

  getters: {
      adData:(state) => state.adData,
      resultsCounter: (state) => state.resultsCounter
  },

  mutations: {
      FETCH_AD_DATA: (state,adData)=> (state.adData = adData),
      FETCH_RESULTS_COUNTER: (state,resultsCounter) => (state.resultsCounter = resultsCounter)},

  actions: {
    fetchAd({commit}){
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      commit("FETCH_AD_DATA",response.data.data.advertisement,response.data.results);
      commit("FETCH_RESULTS_COUNTER",response.data.results);  
    })
    .catch(function (error) {
      console.log(error);
    });
  }
},

};

export default advertisement;
