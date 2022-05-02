<script setup>
import {
  dashboardOne,
  dashboardTwo,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
} from "@/data/dashboard.v1.js";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

let store = useStore();
const isTotal=ref(true);
onMounted(() => {
  
  store.dispatch("totalStats/fetchTotalStats");
  store.dispatch("totalStats/fetchDailyStats")
  console.log(dataOne);
});
const statistics = computed(() => store.getters["totalStats/totalStats"]);

const dataOne = statistics;

 function toggleTotal()
  {
    isTotal.value = !isTotal.value;
    console.log("Clicked")
  }
let categoriesTotalData = [
  {
    name: "Global",
    data: [12, 55, 57, 56, 61, 58, 63, 60, 66, 52, 61, 44],
  },
  {
    name: "Business",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 58, 63, 60],
  },
  {
    name: "Entertainment",
    data: [43, 75, 10, 22, 19, 98, 11, 80, 64, 37, 42, 24],
  },
  {
    name: "Technology",
    data: [28, 33, 15, 22, 22, 11, 37, 42, 24, 98, 11, 80],
  },
];
let categoriesWeeklyData = [
  {
    name: "Global",
    data: [12, 55, 57, 56, 61, 58, 63],
  },
  {
    name: "Business",
    data: [76, 85, 101, 98, 87, 105, 91],
  },
  {
    name: "Entertainment",
    data: [43, 75, 10, 22, 19, 98, 11],
  },
  {
    name: "Technology",
    data: [28, 33, 15, 22, 22, 11, 37],
  },
 
];

</script>

<template>
  <div class="container mx-auto">
    <Breadcrumbs parentTitle="Dashboard" subParentTitle="Admin panel" />
    <div v-for="stat in statistics" :key="stat">
      <div class="grid grid-cols-12 gap-5">
        <!-- STATISTICAL REPORT SMALL CARDS WITH 12 COLUMNS -->

        <!-- REGISTERED USERS -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Add-User text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Registered Users</p>
                <p class="text-xl text-primary">{{ stat.registeredUser }}</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- ACTIVE USERS -->
        <div
          class="
            set
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Target-Market text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Active Users</p>
                <p class="text-xl text-primary">{{ stat.activeMonthlyUser }}</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- PUBLISHERS -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Professor text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Publishers</p>
                <p class="text-xl text-primary">
                  {{ stat.PublisherNewsChannel }}
                </p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- PUBLISHED CONTENTS -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Files text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Total Contents</p>
                <p class="text-xl text-primary">
                  {{ stat.PublishedNewsContent }}
                </p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- RUNNING ADS -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Megaphone text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Running Ads</p>
                <p class="text-xl text-primary">{{ stat.runningAds }}</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- TOTAL SUBSCRIPTIONS -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Checked-User text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Subscriptions</p>
                <p class="text-xl text-primary">{{ stat.subscriber }}</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- TOTAL EARNINGS  -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Mail-Money text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Total Earnings</p>
                <p class="text-xl text-primary">{{ stat.earning }} ETB</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- REPORTED ISSUES -->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-6
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard>
            <div class="flex align-center">
              <i class="i-Angry text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Reported Issues</p>
                <p class="text-xl text-primary">{{ stat.reportedIssues }}</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- REPORT GRAPHS -->

        <!-- NEWS BY CATEGORIES -->
         <button @click="toggleTotal">Total</button>
         
        <div  class="col-span-12 xl:col-span-8 md:col-span-6">
          <BaseCard v-if="isTotal">
            <h4 class="card-title mb-4">News By Categories</h4>
            <apexchart
              type="bar"
              height="255"
              :options="dashboardOne.chartTotalOptions"
              :series="categoriesTotalData"
            ></apexchart>
          </BaseCard>

          <BaseCard v-else>
            <h4 class="card-title mb-4">News By Categories</h4>
             <apexchart
              type="bar"
              height="255"
              :options="dashboardOne.chartWeeklyOptions"
              :series="categoriesWeeklyData"
            ></apexchart>
          </BaseCard>
        </div>
        

        <!-- NEWS BY TYPE -->
        <div class="col-span-12 xl:col-span-4 md:col-span-6">
          <BaseCard>
            <h4 class="card-title mb-4">News By Type</h4>
            <apexchart
              type="pie"
              height="290"
              :options="dashboardTwo.chartOptions"
              :series="dashboardTwo.series"
            ></apexchart>
          </BaseCard>
        </div>

        <!-- TEMPLATE GRAPH 1-->
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-3
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Template Graph 1</div>
              <p class="text-primary text-2xl m-0">$40250</p>
            </div>
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="270"
                :options="splineAreaWidgetTwo.chartOptions"
                :series="splineAreaWidgetTwo.series"
              />
            </div>
          </BaseCard>
        </div>

        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-3
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Template Graph 2</div>
              <p class="text-warning text-2xl m-0">$10250</p>
            </div>
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="270"
                :options="splineAreaWidgetThree.chartOptions"
                :series="splineAreaWidgetThree.series"
              />
            </div>
          </BaseCard>
        </div>

        <!-- TEMPLATE LIST -->
        <div class="col-span-12 xl:col-span-6 lg:col-span-6">
          <BaseCard>
            <div class="card-title mb-4">Most Read News</div>

            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    News Headline one
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  News description less than 40 characters.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">450,554 Views</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="
                  border border-primary
                  text-primary
                  rounded-full
                  hover:bg-primary hover:text-white
                "
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    News Headline two
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  News description less than 40 characters.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">378,995 Views</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="
                  border border-primary
                  text-primary
                  rounded-full
                  hover:bg-primary hover:text-white
                "
                >View Details</BaseBtn
              >
            </div>
            <div class="flex flex-col items-center mb-4 md:flex-row">
              <img
                class="avatar-md mr-2 rounded w-20 h-20"
                src="/images/products/headphone-4.jpg"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-primary">
                    News Headline three
                  </router-link>
                </h5>
                <p class="text-gray-400 text-xs mb-3 md:mb-0">
                  News description less than 40 characters.
                </p>
                <div class="flex justify-center mb-4 md:justify-start md:mb-0">
                  <p class="text-primary text-sm mr-2">320,090 Views</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="
                  border border-primary
                  text-primary
                  rounded-full
                  hover:bg-primary hover:text-white
                "
                >View Details</BaseBtn
              >
            </div>
          </BaseCard>

          <!-- ADMINISTRATORS LIST -->
        </div>
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-3
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard class="text-center">
            <img
              class="w-20 h-20 m-auto shadow-lg avatar-md rounded-full"
              src="/images/faces/2.jpg"
              alt=""
            />
            <p class="text-base mt-4">Admin Two</p>
            <p class="text-xs text-gray-400">Adminstrator</p>
            <p class="my-2 text-sm text-gray-500 mb-3">
              Details on the admin...
            </p>
            <BaseBtn sm class="bg-primary text-white rounded-full">
              View Activities
            </BaseBtn>
            <div class="mt-4">
              <router-link to="" class="mr-2 hover:text-primary">
                <i class="i-Linkedin-2 text-xs"></i>
              </router-link>
              <router-link to="" class="mr-2 hover:text-primary">
                <i class="i-Facebook-2 text-xs"></i>
              </router-link>
              <router-link to="" class="mr-2 hover:text-primary">
                <i class="i-Twitter text-xs"></i>
              </router-link>
            </div>
          </BaseCard>
        </div>
        <div
          class="
            col-span-12
            xl:col-span-3
            lg:col-span-3
            md:col-span-6
            sm:col-span-6
          "
        >
          <BaseCard class="text-center">
            <img
              class="w-20 h-20 m-auto shadow-lg avatar-md rounded-full"
              src="/images/faces/9.jpg"
              alt=""
            />
            <p class="text-base mt-4">Admin Three</p>
            <p class="text-xs text-gray-400">Adminstrator</p>
            <p class="my-2 text-sm text-gray-500 mb-3">
              Details on the admin...
            </p>
            <BaseBtn sm class="bg-primary text-white rounded-full">
              View Activities
            </BaseBtn>
            <div class="mt-4">
              <router-link to="" class="mr-2 hover:text-primary">
                <i class="i-Linkedin-2 text-xs"></i>
              </router-link>
              <router-link to="" class="mr-2 hover:text-primary">
                <i class="i-Facebook-2 text-xs"></i>
              </router-link>
              <router-link to="" class="mr-2 hover:text-primary">
                <i class="i-Twitter text-xs"></i>
              </router-link>
            </div>
          </BaseCard>
        </div>

        <div class="col-span-12 card xl:col-span-6 lg:col-span-12"></div>
        <div class="col-span-12">
          <BaseCard>
            <template v-slot:cardHeader>
              <div class="card-header">
                <div class="card-title py-3">Publishers Activities</div>
              </div>
            </template>
            <div
              class="
                block
                w-full
                overflow-x-auto
                whitespace-nowrap
                borderless
                hover
              "
            >
              <div
                class="
                  dataTable-wrapper dataTable-loading
                  no-footer
                  fixed-columns
                "
              >
                <div
                  class="
                    dataTable-container
                    block
                    w-full
                    overflow-x-auto
                    whitespace-nowrap
                    borderless
                    hover
                  "
                >
                  <table class="table-3 dataTable-table max-w-full w-full">
                    <thead>
                      <tr class="">
                        <th
                          class="
                            text-left
                            border-b
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Number
                        </th>
                        <th
                          class="
                            text-left
                            border-b
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Publisher's Name
                        </th>
                        <th
                          class="
                            text-left
                            border-b
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Logo
                        </th>
                        <th
                          class="
                            text-left
                            border-b
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Status
                        </th>
                        <th
                          class="
                            text-left
                            border-b
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Published Content
                        </th>
                        <th
                          class="
                            text-left
                            border-b
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Registration Date
                        </th>
                        <th
                          class="
                            text-left
                            border-b
                            s
                            pb-3
                            mb-3
                            text-gray-500
                            font-semibold
                          "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="hover:bg-gray-100 cursor-pointer"
                        v-for="(n, index) in 8"
                        :key="index"
                      >
                        <!-- NUMBER TABLE DATA -->
                        <td class="text-xs py-5 px-4">
                          {{ index + 1 }}
                        </td>

                        <!-- PUBLISHER'S NAME TD -->
                        <td class="text-xs">Publisher {{ index + 1 }}</td>

                        <!-- LOGO TD -->
                        <td class="py-5">
                          <div class="flex">
                            <img
                              class="w-9 h-9 rounded-full mr-2"
                              src="/images/products/headphone-1.jpg"
                              alt=""
                            />
                          </div>
                        </td>

                        <!-- STATUS TD -->
                        <td class="py-5">
                          <span
                            class="
                              px-3
                              py-1
                              rounded-full
                              text-primary
                              border border-primary
                              mr-3
                              text-xs
                            "
                            >Active</span
                          >
                        </td>

                        <!-- PUBLISHED CONTENTS TD -->
                        <td class="py-5">{{ 334 * index + 1 }}</td>

                        <!-- REGISTRATION DATE TD -->
                        <td class="py-5">12-02-20</td>

                        <!-- ACTIONS TD -->
                        <td class="py-5">
                          <BaseBtn
                            rounded
                            class="
                              border border-primary
                              text-primary
                              hover:bg-primary hover:text-white
                            "
                          >
                            View
                          </BaseBtn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="dataTable-bottom">
                  <div class="dataTable-info">
                    Showing 1 to 8 of 42 publishers
                  </div>
                  <nav class="dataTable-pagination">
                    <ul class="dataTable-pagination-list"></ul>
                  </nav>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
