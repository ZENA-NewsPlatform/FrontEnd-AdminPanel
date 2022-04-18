import axios from "axios";
var stat = {};
var config = {
  method: "get",
  url: "/v1/systemStats",
  headers: {
    Authorization:
      "Bearer "+localStorage.getItem('token'),
  },
};
export default {
  statisticalData() {
    return axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        stat = response.data.data.doc;
        // console.log(stat)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
