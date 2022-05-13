<template>
  <!-- TABLE HEAD -->
  <Breadcrumbs parentTitle="Publishers" subParentTitle="Publishers List" />
  <Dialog v-if="isLoading" class="z-50">
      <Spinner :animation-duration="4000" :size="60" color="#eeeeee"></Spinner>
    </Dialog>
  <TableHead>
    <!-- <template class="m-2" v-slot:table-title>Publishers</template> -->
    <!-- <template v-slot:results-counter >{{resultsCounter}}results</template> -->
    <template v-slot:report-filter>
      <ReportFilter
       
        :options="options"
        class=""
      ></ReportFilter>
    </template>
    <template v-slot:add-new>
      <router-link
        to="/management/newPublisher"
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

  <!--PUBLISHER TABLE OF REPORT-->
  <PublishersReport>
    <!-- TABLE HEADERS -->
    <template v-slot:th1>Name</template>
    <template v-slot:th2>Type</template>
    <template v-slot:th3>Status</template>
    <template v-slot:th4>Total Posts</template>
    <template v-slot:th5>Joined Date</template>
    <template v-slot:th6>Operations</template>
  </PublishersReport>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
import PublishersReport from "../../components/utilities/PublishersReport.vue";
import TableHead from "../../components/utilities/TableHead.vue";
import ReportFilter from "../../components/utilities/ReportFilter.vue";
import AddPublisher from "./AddPublisher.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

export default {
  data() {
    return {
      // loading: false,
      options: ["free", "paid", "All"],
    };
  },
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    AddPublisher,
    PublishersReport,
    ReportFilter,
    TableHead,
    Breadcrumbs
  },
  computed:{
    isLoading(){
      return this.$store.getters["publisher/loading"]
    }
  },

  async created() {
    const loading = false;
    this.$store.dispatch("publisher/fetchPublisher",{loading});
  },
  computed: {
    resultsCounter() {
      return this.$store.getters["publisher/resultsCounter"];
    },
  },
  methods: {
    createAccount() {
      this.creating = true;
    },
    cancelCreating() {
      this.creating = false;
    },
  },
};
</script>
