<template>
  <table class="w-full mt-2 text-gray-500">
    <thead class="border-b ml-5">
      <!--Table head or the first row of the table -->
      <tr>
        <th class="p-0 pl-4 text-left text-gray-600"><!--Table headers--></th>
        <th class="text-left text-gray-600"><slot name="th1">HEADER1</slot></th>
        <th class="text-left text-gray-600"><slot name="th2">HEADER2</slot></th>
        <th class="text-left text-gray-600"><slot name="th3">HEADER3</slot></th>
        <th class="text-left text-gray-600"><slot name="th4">HEADER4</slot></th>
        <th class="text-left text-gray-600"><slot name="th5">HEADER5</slot></th>
        <th class="text-left text-gray-600"><slot name="th6">HEADER6</slot></th>
        
      </tr>
    </thead>

      <tbody class="divide-y divide-gray-200" >
        <!--Table body-->
        <tr v-for="request in requests" :key="request._id">
          <td class="p-2">
            <input
              type="checkbox"
              class="
                h-5
                w-5
                text-blue-500
                border-gray-300
                rounded
                cursor-pointer
                focus:ring-0
              "
            />
          </td>
          <td class="flex items-center py-4">
           
            <div class="pr-4">
              <div>
                <router-link :to="'/management/currentPublisher/'+request._id" class="text-gray-600 font-bolder">{{
                  request.channelName
                }}</router-link>
              </div>
            </div>

             <!-- <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                :src="request.avatar"
                alt=""
              /> -->
          </td>
          <td>{{ request.adminPhoneNumber }}</td>
          <td>
            <span
              v-if="(request.requestStatus = 'denied')"
              class="px-2 py-1 rounded text-xs text-white bg-red-500"
              >Denied</span
            >
            <span v-else class="px-2 py-1 rounded text-xs text-white bg-green-500"
              >Approved</span
            >
          </td>
          <td>{{ request.document }}</td>
          <td>{{ request.adminEmail }}</td>
          <td class="text-right">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="
                    inline-flex
                    justify-center
                    w-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    rounded-md
                    bg-gray-500
                    hover:bg-gray-600
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-white
                    focus-visible:ring-opacity-75
                  "
                >
                  Actions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      w-5
                      h-5
                      ml-2
                      -mr-1
                      text-violet-200
                      hover:text-violet-100
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="
                    absolute
                    right-0
                    w-32
                    mt-1
                    origin-top-right
                    bg-white
                    divide-y divide-gray-100
                    rounded-md
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    z-50
                    focus:outline-none
                  "
                >
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-green-400 text-white' : 'text-gray-900',
                          'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                        ]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 mr-2 text-violet-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        Approve
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-red-400 text-white' : 'text-gray-900',
                          'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                        ]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 mr-2 text-violet-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Decline
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </td>
        </tr>
      </tbody>

<!-- 
      <div v-if="!isNot">
        <p>Empty List</p>
      </div> -->


   

    <tfoot>
      <!--Table footer-->
      <tr>
        <td colspan="7" class="py-2">
          <div
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm text-gray-500">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">5</span>
                of
                <span class="font-medium">42</span>
                results
              </p>
            </div>
            <!-- PAGINATOR -->
            <div>
              <nav
                class="
                  relative
                  z-0
                  inline-flex
                  rounded-md
                  shadow-sm
                  -space-x-px
                "
                aria-label="Pagination"
              >
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-2
                    rounded-l-md
                    border border-gray-300
                    text-sm
                    font-medium
                    text-gray-500
                    hover:bg-gray-50
                  "
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                <a
                  href="#"
                  aria-current="page"
                  class="
                    z-10
                    bg-indigo-50
                    border-indigo-500
                    text-indigo-600
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-1
                    border
                    text-sm
                    font-medium
                  "
                >
                  1
                </a>
                <a
                  href="#"
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-1
                    border
                    text-sm
                    font-medium
                  "
                >
                  2
                </a>
                <a
                  href="#"
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    hidden
                    md:inline-flex
                    relative
                    items-center
                    px-4
                    py-1
                    border
                    text-sm
                    font-medium
                  "
                >
                  3
                </a>
                <span
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-1
                    border border-gray-300
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  ...
                </span>
                <a
                  href="#"
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    hidden
                    md:inline-flex
                    relative
                    items-center
                    px-4
                    py-1
                    border
                    text-sm
                    font-medium
                  "
                >
                  8
                </a>
                <a
                  href="#"
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-1
                    border
                    text-sm
                    font-medium
                  "
                >
                  9
                </a>
                <a
                  href="#"
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-1
                    border
                    text-sm
                    font-medium
                  "
                >
                  10
                </a>
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-2
                    py-1
                    rounded-r-md
                    border border-gray-300
                    text-sm
                    font-medium
                    text-gray-500
                    hover:bg-gray-50
                  "
                >
                  <span class="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
export default {
  props: ["publishers", "ads"],

  data() {
    return {
    };
  },

  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  computed: {
    requests() {
      return this.$store.getters['publisherVerification/requests'];
    },
    
  
  },
};
</script>

<style></style>
