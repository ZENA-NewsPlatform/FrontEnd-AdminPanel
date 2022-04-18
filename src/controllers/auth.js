import axios from "axios";
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

  getSecretContent() {
    return axios
    .get("/api/v1/systemStats")
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
