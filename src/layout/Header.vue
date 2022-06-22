<script setup>
import { onMounted,computed, ref, watch, watchEffect } from "vue";
import { Switch } from "@headlessui/vue";
import HeaderSearch from "../components/HeaderSearch.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

let store = useStore();
let route = useRouter();
let toggler= false;

onMounted(() => {
  store.dispatch("totalStats/fetchTotalStats");
  store.dispatch("profile/fetchAdminData");
});
const user = computed(() => store.getters["profile/adminData"]);

const sideBarToggle = () => {
  let sidenav = store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen;

  if (sidenav == false) {
    store.commit("largeSidebar/toggleSidebarProperties");
  } else {
    store.commit("largeSidebar/toggleSidebarProperties");
  }
};

function toggleModal() {
    toggler = true;
};
function toggleModalOff() {
    toggler = false;
};
const logout = () => {
  localStorage.removeItem("token");
  route.replace("/signin");
};


</script>

<template>
  <div  class=" header-wrapper flex bg-white justify-between px-4">
    <div class=" flex items-center">
      <!--MAIN LOGO -->
      <MainLogo size="big" class="fill-current text-purple-500 px-4" viewport="0 0 80 80"></MainLogo>
             

      <!-- HAMBURGER BUTTON/ SIDEBAR TOGGLER -->
      <div class="mx-0 sm:mx-3">
        <button
          @click="sideBarToggle"
          class="
            menu-toggle
            cursor-pointer
            text-gray-500
            align-middle
            focus:outline-none
          "
          type="button"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- MAIN SEARCH -->
      <!-- <HeaderSearch /> -->
    </div>
    <div class="flex items-center">
      <!-- notification-dropdown  -->
      <!-- <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="
              btn btn-sm
              hover:bg-gray-100
              rounded
              badge-top-container
              inline-flex
              justify-center
              w-full
              px-4
              py-2
              text-sm
              font-medium
            "
          >
            <span class="badge-count text-white bg-purple-500">3</span>
            <i class="i-Bell text-xl header-icon text-gray-800"></i>
          </MenuButton>
        </div>

        <MenuItems
          class="
            absolute
            right-0
            w-44
            mt-2
            overflow-hidden
            origin-top-right
            bg-white
            rounded-md
            custom-box-shadow
            focus:outline-none
          "
        >
          <div class="">
                        <MenuItem
                            v-for="(item, index) in 4"
                            :key="index"
                            v-slot="{ active }"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-900',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                            >
                                <div class="flex flex-1 justify-between">
                                    <div>
                                        <h6>New Issue reported</h6>
                                        <p
                                            :class="[
                                                active
                                                    ? 'text-gray-300'
                                                    : 'text-gray-500',
                                            ]"
                                        >
                                            Issue one 
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            :class="[
                                                active
                                                    ? 'text-gray-200'
                                                    : 'text-gray-400',
                                            ]"
                                        >
                                            10s
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </MenuItem>
                    </div>
        </MenuItems>
      </Menu> -->
      <!-- PROFILE-DROPDOWN  -->
      <Menu as="div" class="relative inline-block mr-10 text-left">
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
            "
          >
            <img
              class="avatar rounded-full"
              :src="user.photo"
              alt=""
            />
          </MenuButton>
        </div>

        <MenuItems
          class="
            absolute
            right-0
            w-44
            mt-2
            overflow-hidden
            origin-top-right
            bg-white
            rounded-md
            custom-box-shadow
            focus:outline-none
          "
        >
          <div class="">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-purple-500 text-white' : 'text-gray-900',
                  'group flex  items-center w-full px-4 py-2 text-sm',
                ]"
              >
                Account Settings
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-purple-500 text-white' : 'text-gray-900',
                  'group flex  items-center w-full px-4 py-2 text-sm',
                ]"
              >
                Settings
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <MenuButton
                @click="logout"
                :class="[
                  active ? 'bg-purple-500 text-white' : 'text-gray-900',
                  'group flex  items-center w-full px-4 py-2 text-sm',
                ]"
              >
                Sign Out
              </MenuButton>
            </MenuItem>

         
             <!-- <teleport to="main" v-if="toggler=true">
              <div class="modal" >
                <div>
                  <h2>Alert</h2>
                  <MenuButton @click="toggleModalOff">Cancel</MenuButton>
                  <MenuButton @click="logout">Ok</MenuButton>
                </div>
              </div>
            </teleport> -->
          
     
        </div>


        </MenuItems>
      </Menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal{
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.1);
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center
}
.modal > div{
    background-color:#fff;
    padding:50px;
    border-radius:10px;
}
.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 100;
  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
}
.mega-menu {
  width: 1200px;
}
ul.links {
  column-count: 2;
  li {
    margin-bottom: 8px;
  }
}
</style>
