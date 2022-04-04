<template>
  <AddForm></AddForm>
</template>

<script>
import axios from 'axios'
import AddForm from "../../components/utilities/AddForm.vue";
export default {

  components: {
    AddForm,
  },

  provide() {
    return {
      addPublisher: this.addPublisher,
    };
  },

  methods: {
    addPublisher(input1, input2, input3) {
      console.log(input1);
      var data = JSON.stringify({
        name: input1,
        email: input2,
        description: input3,
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

    cancelForm() {},
  },
};
</script>

<style></style>
