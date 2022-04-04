<template>
  <AddForm @add-data="submitForm" @cancel-form="cancelForm"></AddForm>
</template>

<script>
import AddForm from "../../components/utilities/AddForm.vue";

export default {
  components: {
    AddForm,
  },

  data() {
    return {};
  },

  methods: {
    submitForm() {},
    cancelForm() {},
  },
};
</script>

<style></style>
