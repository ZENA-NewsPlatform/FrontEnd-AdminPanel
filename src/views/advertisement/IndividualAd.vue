<template>
  <Breadcrumbs parentTitle="Advertisement" :subParentTitle="name" />
  <div class="grid grid-cols-12 gap-5">
    <div
      class="col-span-1 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
    >
      <BaseCard>
        <div class="flex align-center">
          <i class="i-Add-User text-6xl text-purple-200"></i>
          <div class="m-auto">
            <p class="text-gray-400">Seen Count</p>
            <p class="text-xl text-primary">{{ count }}</p>
          </div>
        </div>
      </BaseCard>
    </div>

    <div
      class="col-span-1 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
    >
      <BaseCard>
        <div class="flex align-center">
          <i class="i-Add-User text-6xl text-purple-200"></i>
          <div class="m-auto">
            <p class="text-gray-400">Link Clicked</p>
            <p class="text-xl text-primary">{{ click }}</p>
          </div>
        </div>
      </BaseCard>
    </div>

    <div
      class="col-span-1 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
    >
      <BaseCard>
        <div class="flex align-center">
          <i class="i-Add-User text-6xl text-purple-200"></i>
          <div class="m-auto">
            <p class="text-gray-400">Priority</p>
            <p class="text-xl text-primary">{{ priority }}</p>
          </div>
        </div>
      </BaseCard>
    </div>
    
  </div>

  <div>
    <a
      href="#"
      class="
        flex
        my-10
        flex-col
        items-center
        bg-white
        rounded-lg
        border
        shadow-md
        md:flex-row md:max-w-xl
        hover:bg-gray-100
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
      "
    >
      <img
        class="
          object-cover
          w-full
          h-96
          rounded-t-lg
          md:h-auto md:w-48 md:rounded-none md:rounded-l-lg
        "
        :src="logo"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          {{ name }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  </div>

  <!-- <EditorsTable></EditorsTable> -->
</template>

<script>
import axios from "axios";
import SpecialCard from "../components/utilities/SpecialCard.vue";
// import EditorsTable from "./EditorsTable.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default {
  components: {
    SpecialCard,
    // EditorsTable,
    Breadcrumbs,
  },
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      priority: 0,
      count: 0,
      click:0
    };
  },
  created() {
    var config = {
      method: "get",
      url: "v1/advertisements/id/" + this.id,
      headers: {},
    };
    const self = this;
    axios(config)
      .then(function (response) {
        console.log("++++++++++++++++++++++++++++++++++++++++++++");
        console.log(JSON.stringify(response.data));
        // self.ad = response.data.data.advertisement.link;
        self.priority = response.data.data.advertisement.priority;
        self.click = response.data.data.advertisement.linkClickedCount;
        self.count = response.data.data.advertisement.seenCount;
        self.name = response.data.data.advertisement.link;
        console.log("++++++++++++++++++++++++++++++++++++++++++++");
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped></style>
