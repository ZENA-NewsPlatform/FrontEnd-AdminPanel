<template>

  <AddForm></AddForm>
</template>

<script>
import AddForm from "../../components/utilities/AddForm.vue";

export default {
  components: {
    AddForm,
    TableHead,
    ReportFilter
  },

  provide() {
    return {
      addData: this.addData,
    };
  },

  data() {
    return {};
  },

  methods: {
    addData(input1, input2, input3) {
      console.log(input1);
    }
  },
};
</script>

<style></style>
