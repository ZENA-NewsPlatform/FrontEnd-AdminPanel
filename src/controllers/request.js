import axios from "axios";


export default {
  approve(id) {
    
    var configApprove = {
      method: 'patch',
      url: 'v1/publisherChannelsRequest/accept/id/' + id,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    return axios(configApprove)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  },
  decline(id) { 
    var configDecline = {
      method: 'patch',
      url: 'v1/publisherChannelsRequest/deny/id/' + id,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    return axios(configDecline)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
