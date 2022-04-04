<template>
  <BaseCard>
    <div class="grid grid-cols-12">
      <div class="col-span-12 lg:col-span-6">
        <div class="p-5">
          <h1 class="mb-3 text-lg"><slot name="formTitle">Title</slot></h1>
          <form action="" >
            <!-- Creating form -->
            <div class="mb-3">
              <!--FIRST INPUT / like title-->
              <label class="text-xs pl-3 text-gray-600"  for=""
                ><slot name="label1">label1</slot></label
              >
              <input
                ref="input1"
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
              <!--SECOND INPUT / i.e, password or description-->
              <label class="text-xs pl-3 text-gray-600" for=""><slot name="label2">label2</slot></label>
              <input
                ref="input2"
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
              <!--THIRD INPUT-->
              <label
                class="text-xs pl-3 text-gray-600"
                for=""
                ><slot name="label3">label3</slot></label
              >
              <input
                ref="input3"
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
              <!--FOURTH INPUT /OPTIONAL FILE INPUT-->
              <label class="text-xs pl-3 text-gray-600" for=""><slot>label4</slot></label>
              <input
                ref="input4"
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
     
    </div>
  </BaseCard>
</template>

<script>
export default {
  inject:['addPublisher'],
  data() {
    return {
      // input1: "",
      // input2: "",
      // input3:"",
      // input4:"",
      // newD:"Dagi"
      
    };
  },

  methods: {

    submitForm() {
      const input1 = this.$refs.input1.value;
      const input2 = this.$refs.input2.value;
      const input3 = this.$refs.input3.value;
      this.addPublisher(input1,input2,input3);
      },

   

  },
};
</script>

<style></style>
