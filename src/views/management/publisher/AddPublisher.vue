<template>
  <AddForm>
    <template v-slot:label1>Name</template>
    <template v-slot:label2>Email</template>
    <template v-slot:label3>Description</template>
    <template v-slot:label4>Logo</template>
  </AddForm>
</template>

<script>
import axios from "axios";
import AddForm from "../../components/utilities/AddForm.vue";
export default {
  components: {
    AddForm,
  },

  provide() {
    return {
      addData: this.addData,
    };
  },

  methods: {
    addData(input1, input2, input3) {
      console.log(input1, input2, input3);
      var data = JSON.stringify({
        name: input1,
        email: input2,
        description: input3,
        logo: "dssa.png",
      });

      var config = {
        method: "post",
        url: "v1/publisherChannel",
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
