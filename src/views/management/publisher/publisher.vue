<template>

  <!-- TABLE HEAD -->
  <TableHead>
    <template v-slot:table-title>Publisher's List</template>
    <template v-slot:results-counter>{{users.resultCounter}}</template>
    <template v-slot:report-filter>
      <ReportFilter
        :filterData="filterPublishers"
        :options="options"
        class="ml-8"
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
  <ReportTable :publishers="users">
    <!-- TABLE HEADERS -->
    <template v-slot:th1>NAME</template>
    <template v-slot:th2>TYPE</template>
    <template v-slot:th3>STATUS</template>
    <template v-slot:th4>TOTAL POSTS</template>
    <template v-slot:th5>START DATE</template>
    <template v-slot:th6>OPERATIONS</template>
  </ReportTable>

</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
import axios from "axios";
import ReportTable from "../../components/utilities/ReportTable.vue";
import TableHead from "../../components/utilities/TableHead.vue";
import ReportFilter from "../../components/utilities/ReportFilter.vue";
import AddPublisher from "./AddPublisher.vue";
axios.defaults.baseURL = "https://zena-api-dev.herokuapp.com/api";

export default {
  data() {
    return {
      users: {},
      resultsCounter: 0,
      creating: false,
      options: ["free", "paid", "All"],
    };
  },
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    AddPublisher,
    ReportTable,
    ReportFilter,
    TableHead
  },

  async created() {
    var config = {
      method: "get",
      url: "v1/publisherchannels",
      headers: {},
    };

    const that = this;
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        that.users = response.data.data.doc;
        console.log(response.data.results);
        that.resultsCounter = response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    createAccount() {
      this.creating = true;
    },
    cancelCreating() {
      this.creating = false;
    },
    // filterPublishers(category) {
    // const filterCandidate = Object.entries(this.users)
    // if(category !== 'All'){
    //  filterCandidate = filterCandidate.filter((user) => {
    //   return user.priceType === category;
    // });
    // }
    // },
  },
};
</script>
