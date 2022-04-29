<template>
  <!-- ADVERTISEMENTS TABLE HEAD -->
   <Breadcrumbs parentTitle="Advertisements" subParentTitle="Advertisements List" />
  
  <TableHead>
    <template v-slot:report-filter>
      <ReportFilter
        :filterData="filterPublishers"
        :options="options"
        
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
  <AdsReport></AdsReport>
</template>

<script>
import AdsReport from "../components/utilities/AdsReport.vue";
import TableHead from "../components/utilities/TableHead.vue";
import ReportFilter from "../components/utilities/ReportFilter.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default {
  components: {
    AdsReport,
    TableHead,
    ReportFilter,
    Breadcrumbs
  },

  created() {
    this.$store.dispatch("advertisement/fetchAd");
  },

  computed: {
    resultsCounter() {
      return this.$store.getters["advertisement/resultsCounter"];
    },
  },
  
};
</script>

<style></style>
