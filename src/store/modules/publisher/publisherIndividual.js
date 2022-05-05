import axios from 'axios'
var config ={
  method: 'get',
  url: 'v1/publisherChannels/id/623efb69e29eb2523c8beb0e',
  headers: { 
      
  }
}
const publisherIndividual = {
    namespaced: true,

    state: {
        publisher: {},
        id: 0,
      },
      getters: {
        publisher: (state) => state.publisher,
        id: (state) => state.id,
      },
      mutations: {
        FETCH_PUBLISHER: (state, payload,publisher) => (state.publisher = publisher),
        ID_DATA: (state, id) =>
          (state.id = id),
      },
      actions: {
        async fetchPublisher({commit}) {
          axios(config)
            .then(function (response) {
              // console.log(JSON.stringify(response.data));
              commit("FETCH_PUBLISHER",payload,response.data.data.doc);
              // console.log(payload);
              // commit("ID_DATA", response.data.data.doc.id);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },
}

export default publisherIndividual