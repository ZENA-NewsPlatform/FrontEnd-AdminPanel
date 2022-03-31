import axios from "axios";
// const url = 'http://localhost:3000/api/';
export default {
  login(credentials) {
    return axios
      .post("/v1/admins/login", credentials)
      .then((response) => response.data);
  },

  // signUp(credentials) {
  //   return axios
  //     .post('/v1/admins/signin', credentials)
  //     .then(function (response) {
  //             if (response.status == 200) {
  //             localStorage.setItem("token", response.data.token);
  //             // that.$router.push("/");

  //           }
  //         })
  // },

  getSecretContent(user) {
    var config = {
      method: "get",
      url: "v1/admins/me",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const that = this;
    axios(config)
      .then(function (response) {
        that.user = response.data.data.doc;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
