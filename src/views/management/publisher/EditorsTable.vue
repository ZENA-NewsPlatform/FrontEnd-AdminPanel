<template>
  <BaseCard>
            <template v-slot:cardHeader>
              <div class="card-header">
                <div class="card-title py-3">Editors/Publishers</div>
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
                          Editor's Name
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
                        <td class="text-xs">Editor {{ index + 1 }}</td>

                        <!-- LOGO TD -->
                        

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
                    Showing 1 to 8 of 42 Editors
                  </div>
                  <nav class="dataTable-pagination">
                    <ul class="dataTable-pagination-list"></ul>
                  </nav>
                </div>
              </div>
            </div>
          </BaseCard>
</template>

<script>
export default {

}
</script>

<style>

</style>