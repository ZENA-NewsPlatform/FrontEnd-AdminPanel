<template>
  <Breadcrumbs parentTitle="Management" :subParentTitle="publisher.name" />
  <div class="grid grid-cols-12 gap-5">
    <div
      class="col-span-1 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6"
    >
      <BaseCard>
        <div class="flex align-center">
          <i class="i-Add-User text-6xl text-purple-200"></i>
          <div class="m-auto">
            <p class="text-gray-400">Registered Users</p>
            <p class="text-xl text-primary">{{ publisher.name }}</p>
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
            <p class="text-gray-400">Subscribers</p>
            <p class="text-xl text-primary">{{ publisher.subscriberCount }}</p>
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
            <p class="text-gray-400">Published Contents</p>
            <p class="text-xl text-primary">
              {{ publisher.publishedContentCount }}
            </p>
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
            <p class="text-gray-400">Editors</p>
            <p class="text-xl text-primary">{{ publisher.name }}</p>
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

      <div class="grid grid-cols-2 gap-0">
        <div class="col-span-1 w-40">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-otWV7EUvdcDu7qmYjy1LQHaHa%26pid%3DApi&f=1"
            alt="logo"
          />
        </div>

        <div class="col-span-1">
          <h5
            class="
              mt-3
              mb-2
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            {{ publisher.name }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 pr-3">
            {{ publisher.description }}
          </p>
        </div>
      </div>
    </a>
  </div>

  <EditorsTable></EditorsTable>
</template>

<script>
import axios from "axios";
import SpecialCard from "../../components/utilities/SpecialCard.vue";
import EditorsTable from "./EditorsTable.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default {
  components: {
    SpecialCard,
    EditorsTable,
    Breadcrumbs,
  },
  data() {
    return {
      id: this.$route.params.id,
      publisher: {},
      logo: "",
      name: "",
    };
  },
  created() {
    var config = {
      method: "get",
      url: "v1/publisherChannels/id/" + this.id,
      headers: {},
    };
    const self = this;
    axios(config)
      .then(function (response) {
        console.log("++++++++++++++++++++++++++++++++++++++++++++");
        console.log(JSON.stringify(response.data));
        self.publisher = response.data.data.doc;
        console.log("++++++++++++++++++++++++++++++++++++++++++++");
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped></style>
