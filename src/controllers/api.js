import axios from "axios";
axios.defaults.baseURL = "https://zena-server.herokuapp.com/api";


class API {
  //Login
  // logIn() {
  //   var data = JSON.stringify({
  //     email: this.email,
  //     password: this.password,
  //   });

  //   var config = {
  //     method: "post",
  //     url: "/v1/admins/login",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };
  //   const that = this;
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       if (response.status == 200) {
  //         localStorage.setItem("token", response.data.token);
  //         console.log(response.data.token);
  //         // console.log(response.data.data.user.type);
  //         that.type = response.data.data.user.type;
  //         console.log(that.type);
  //         console.log("logged in");
  //         that.$router.push("/");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
}
export default API;
