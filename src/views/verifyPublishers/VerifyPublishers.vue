<template>
  <Breadcrumbs parentTitle="Verification" subParentTitle="Publishers" />
  <Dialog v-if="isLoading" class="z-50">
    <Spinner :animation-duration="4000" :size="60" color="#eeeeee"></Spinner>
  </Dialog>
  <TableHead>
    <template v-slot:report-filter>
      <ReportFilter :options="options" class=""></ReportFilter>
    </template>
    <template v-slot:add-new>
      
    </template>
  </TableHead>
  <VerificationTable>
    <template v-slot:th1>Channel</template>
    <template v-slot:th2>Contact Number</template>
    <template v-slot:th3>Contact Email</template>
    <template v-slot:th4>Authorization Document</template>
    <template v-slot:th5>Verification Status</template>
    <template v-slot:th6>Operations</template>
  </VerificationTable>


</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import VerificationTable from "../components/utilities/VerificationTable.vue";
import TableHead from "../components/utilities/TableHead.vue";
import ReportFilter from "../components/utilities/ReportFilter.vue";
// import AddPublisher from "./AddPublisher.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
export default {
  data(){
    return{
      options:["Approved","Pending","Denied"]
    }
  },
  created(){
    this.$store.dispatch("publisherVerification/fetchData");
  },
   components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    // AddPublisher,
    VerificationTable,
    ReportFilter,
    TableHead,
    Breadcrumbs
  },
};
</script>

<style></style>
