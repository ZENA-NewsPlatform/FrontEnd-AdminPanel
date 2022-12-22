<template>
  <Breadcrumbs parentTitle="Verification" subParentTitle="Publishers" />
  <Dialog v-if="isLoading" class="z-50">
    <Spinner :animation-duration="4000" :size="60" color="#eeeeee"></Spinner>
  </Dialog>
  <TableHead>
    <!-- <template v-slot:add-new>

      <div class="relative text-lg text-gray-400 w-48">
        <button class="
        flex
        items-center
        justify-between
        px-3
        py-1.5
        bg-white
        w-full
        border border-orange-900
        rounded-lg
        text-gray-400
      " @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
          <span class="text-gray-400">{{ selectedOption }}</span>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="h-4 w-4 transform transition-transform duration-200 text-gray-400 ease-in-out"
            :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <transition enter-active-class="transform transition duration-500 ease-custom"
          enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100"
          leave-active-class="transform transition duration-300 ease-custom"
          leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
          <ul v-show="isOptionsExpanded" class="
          absolute
          text-grey-900
          left-0
          right-0
          mb-4
          bg-white
          divide-y
          rounded-lg
          shadow-lg
          overflow-hidden
        ">
            <li v-for="option in options" :key="option" @click="() => filterData(option)"
              class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200" @mousedown.prevent="setOption(option)">
              {{ option }}
            </li>
          </ul>
        </transition>
      </div>

    </template> -->
   
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
  data() {
    return {
      options: ["Approved", "Pending", "Denied"],
      isOptionsExpanded: false,
      selectedOption: "All",
    }
  },
  created() {
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
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
  }
};
</script>

<style>
</style>
