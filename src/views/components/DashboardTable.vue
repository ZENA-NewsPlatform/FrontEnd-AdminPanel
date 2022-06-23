<template>
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
          <!-- <th class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
            Number
          </th> -->
          <th
            class="
              text-left
              border-b
              pb-3
              pl-2
              mb-3
              text-gray-500
              font-semibold
            "
          >
            Publisher Channel
          </th>
          <th class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
            Contents
          </th>
          <th class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
            View Count
          </th>
          <th class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
            Subscribers
          </th>
          <th class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
            Total Earned
          </th>
          <th class="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
            Reported Issues
          </th>

          <th
            class="
              text-left
              border-b
              s
              pb-3
              pl-2
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
          v-for="publisher in publishers"
          :key="publisher._id"
        >
          <!-- PUBLISHER CHANNEL -->
          <td class="text-lg pl-5">
            <div class="flex">
              <img
                class="w-9 h-9 rounded-full mr-2"
                :src="
                  'https://zena-api-dev.herokuapp.com/' +
                  publisher.logo
                "
                alt=""
              />
              <h5 class="pl-2 pt-1">
                {{ publisher.name }}
              </h5>
            </div>
          </td>
          <!-- PUBLISHED CONTENTS TD -->
          <td class="py-5 pl-5">0{{ publisher.PublishedNewsContent }}</td>
          <!-- VIEW COUNT -->
          <td class="py-5 pl-5">0{{ publisher.viewCount }}</td>
          <!-- SUBSCRIBERS -->
          <td class="py-5 pl-5">0{{ publisher.subscription }}</td>
          <!-- TOTAL EARNINGS -->
          <td class="py-5 pl-5">{{ publisher.earning }}.00ETB</td>
          <!-- REPORTED ISSUES -->
          <td class="py-5 pl-5">0{{ publisher.reportedIssues }}</td>

          <!-- ACTIONS TD -->
          <td class="py-5">
            <BaseBtn
              rounded
              class="
                border border-primary
                text-primary
                hover:bg-primary hover:text-white
              "
              @click="gotoDetails(publisher.publisherChannel.id)"
            >
              View
            </BaseBtn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {},
  created() {
    this.$store.dispatch("publisherStatistics/fetchTotalStats");
  },

  computed: {
    publishers() {
      return this.$store.getters["publisherStatistics/totalStats"];
    },
  },

  methods: {
    gotoDetails() {
      this.$router.push("");
    },
  },
};
</script>
