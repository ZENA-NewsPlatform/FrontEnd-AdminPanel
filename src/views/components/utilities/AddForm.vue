<template>
  <BaseCard>
    <div class="grid grid-cols-6">
      <div class="col-span-6 lg:col-span-6">
        <div class="p-5">
          <h1 class="mb-3 text-xl font-bold ml-2">
            <slot name="formTitle">Title</slot>
          </h1>
          <form action="">
            <!-- Creating form -->
            <div class="mb-3">
              <!--FIRST INPUT / like title-->
              <label class="text-sm pl-3 text-black-100" for="label1"
                ><slot name="label1">label1</slot></label
              >
              <input
                ref="input1"
                class="
                  w-full
                  px-4
                  py-2
                  bg-white-100
                  focus:outline-none
                  border border-gray-400
                  rounded-lg
                "
                type="text"
                placeholder="Enter publisher's name"
              />
            </div>
            <div class="mb-3">
              <!--SECOND INPUT / i.e, password or description-->
              <label class="text-sm pl-3 text-gray-600" for=""
                ><slot name="label2">label2</slot></label
              >
              <input
                ref="input2"
                class="
                  w-full
                  px-4
                  py-2
                  bg-white-100
                  focus:outline-none
                  border border-gray-400
                  rounded-lg
                "
                type="text"
                placeholder="Enter publisher's email"
              />
            </div>
            <div class="mb-3">
              <!--THIRD INPUT-->
              <label class="text-sm pl-3 text-gray-600" for=""
                ><slot name="label3">label3</slot></label
              >
              <input
                ref="input3"
                class="
                  w-full
                  px-4
                  py-2
                  bg-white-100
                  focus:outline-none
                  border border-gray-400
                  rounded-lg
                "
                type="text"
                rows="3"
                placeholder="Enter a short description "
              />
            </div>
            <div class="mb-3">
              <!--FOURTH INPUT /OPTIONAL FILE INPUT-->
              <label class="text-xs pl-3 text-gray-600" for=""
                ><slot>label4</slot></label
              >
              <input
                ref="input4"
                class="
                  fileInput
                  w-full
                  px-4
                  py-2
                  bg-white-100
                  focus:outline-none
                  cursor-pointer
                  border border-gray-400
                  rounded-lg
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
                inline-block
                class="bg-purple-500 mb-2 mr-4 text-white rounded-lg"
                >Confirm</BaseBtn
              >

              <!-- CANCEL BUTTON -->
              <BaseBtn
                @click="cancelForm"
                inline-block
                class="bg-red-500 mb-2 text-white rounded-lg"
                >Cancel</BaseBtn
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import router from '@/router'
export default { 
  inject: ["addData"],
  data() {
    return {};
  },

  methods: {
    submitForm() {
      const input1 = this.$refs.input1.value;
      const input2 = this.$refs.input2.value;
      const input3 = this.$refs.input3.value;
      this.addData(input1, input2, input3);
    },
    cancelForm() {
    router.push('/management/publisher')
    },
  },
};
</script>

<style>
.fileInput {
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  box-shadow: none;
  color: #333;
  padding: 0.54688rem 0.875rem;
  font-size: 14px;
  height: 46px;
  line-height: 1.6;
  font-weight: 400;
  font-family: "Titillium Web", sans-serif;
}
</style>
