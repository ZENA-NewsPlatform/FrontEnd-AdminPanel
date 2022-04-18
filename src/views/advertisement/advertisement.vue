<template>
  <TableHead>
    <template v-slot:table-title>Advertisement's List</template>
    <template v-slot:results-counter>{{resultsCounter}}</template>
    <template v-slot:report-filter>
      <ReportFilter
        :filterData="filterPublishers"
        :options="options"
        class="ml-8"
      ></ReportFilter>
    </template>
    <template v-slot:add-new>
      <router-link
        to="/advertisements/newAd"
        class="
          flex
          items-center
          bg-green-500
          p-2
          text-white
          rounded
          text-sm
          hover:bg-green-600
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>

        Add New
      </router-link>
    </template>
  </TableHead>
  <!-- ADVERTISEMENTS TABLE -->

  <AdsReport :ads="ads" ></AdsReport>

</template>

<script>
import axios from "axios";
import AdsReport from "../components/utilities/AdsReport.vue";
import TableHead from "../components/utilities/TableHead.vue";
import ReportFilter from "../components/utilities/ReportFilter.vue";

export default {
  data() {
    return {
      ads: {},
      resultsCounter:0
    };
  },
  components: {
    AdsReport,
    TableHead,
    ReportFilter,
  },
  created() {
    var config = {
      method: "get",
      url: "/v1/advertisements",
      headers: {
     
          },
    };

    const that = this;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        that.resultsCounter = response.data.results
        that.ads = response.data.data.advertisement;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
