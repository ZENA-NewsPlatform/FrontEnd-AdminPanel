<template>
  <!-- <router-view/> -->
  <BaseCard>
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6">
          <div class="p-5">
            <h1 class="mb-3 text-lg">Fill all the fields</h1>
            <form action="">
              <!-- Create a publisher form -->
              <div class="mb-3">
                <!--PUBLISHER NAME-->
                <label class="text-xs pl-3 text-gray-600" v-bind="name" for=""
                  >Name</label
                >
                <input
                  v-model="name"
                  class="
                    w-full
                    px-4
                    py-1
                    bg-gray-100
                    focus:outline-none
                    border border-gray-400
                    rounded-full
                  "
                  type="text"
                  placeholder="Enter publisher's name"
                />
              </div>
              <div class="mb-3">
                <!--ADDRESS-->
                <label class="text-xs pl-3 text-gray-600" for="">Email</label>
                <input
                  v-model="email"
                  class="
                    w-full
                    px-4
                    py-1
                    bg-gray-100
                    focus:outline-none
                    border border-gray-400
                    rounded-full
                  "
                  type="text"
                  placeholder="Enter publisher's email"
                />
              </div>
              <div class="mb-3">
                <!--DESCRIPTION-->
                <label
                  class="text-xs pl-3 text-gray-600"
                  v-bind="description"
                  for=""
                  >Description</label
                >
                <input
                  v-model="description"
                  class="
                    w-full
                    px-4
                    py-1
                    bg-gray-100
                    focus:outline-none
                    border border-gray-400
                    rounded-full
                  "
                  type="text"
                  rows="3"
                  placeholder="Enter a short description "
                />
              </div>
              <div class="mb-3">
                <!--LOGO-->
                <label class="text-xs pl-3 text-gray-600" for="">Logo</label>
                <input
                  class="
                    w-full
                    px-4
                    py-1
                    bg-gray-100
                    focus:outline-none
                    border border-gray-400
                    rounded-full
                  "
                  type="file"
                  rows="3"
                  placeholder="Enter an image file for logo "
                />
              </div>
              <div class="mb-4 mt-6 pt-4 flex">
                <!--CONFIRM BUTTON-->
                <BaseBtn
                  @click="submitForm"
                  block
                  class="bg-purple-500 mb-2 text-white rounded-full"
                  >Confirm</BaseBtn
                >

                <!-- CANCEL BUTTON -->
                <BaseBtn
                  @click="cancelForm"
                  block
                  class="bg-red-500 mb-2 text-white rounded-full"
                  >Cancel</BaseBtn
                >
              </div>
            </form>
          </div>
        </div>
        <!-- <div class="col-span-6 lg:col-span-6 ">
            <BaseBtn>Click</BaseBtn>
          </div> -->
      </div>
   </BaseCard>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "https://zena-server.herokuapp.com/api";
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  components: {  },
  methods: {
    submitForm() {
       var data = JSON.stringify({
        name: this.name,
        email: this.email,
        description: "TA channel for accessing news of all catagoriecategories",
        logo: "dssa.png",
      });

      var config = {
        method: "post",
        url: "v1/publisherChannels",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
