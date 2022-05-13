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
    <template v-slot:th1>Name</template>
    <template v-slot:th2>Contact Number</template>
    <template v-slot:th3>Legal Document</template>
    <template v-slot:th4>Address</template>
    <template v-slot:th5>Operations</template>
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
    }
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
