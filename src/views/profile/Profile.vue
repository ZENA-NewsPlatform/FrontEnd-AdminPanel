<template>
  <div class="container mx-auto">
    <BaseCard noPadding class="user-profile overflow-hidden relative">
      <div class="header-cover"></div>
      <div class="flex justify-center z-10 -m-10">
        <div class="text-center">
          <img
            class="
              relative
              z-1
              w-20
              h-20
              m-auto
              rounded-full
              border-2 border-white
            "
            :src="user.photo"
            alt="profile"
            onerror="if (this.src != 'error.jpg') this.src = '/images/faces/dummy-profile.jpg';"
          />
          <p class="text-2xl">{{ user.name }}</p>
          <p class="text-gray-600">{{ user.type }}</p>
        </div>
      </div>
      <div class="mt-20 p-5">
        <!-- TABS -->
        <TabGroup>
          <TabList class="flex bg-white justify-center">
            <Tab
              v-for="category in categories"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                class="font-semibold border-b-2 border-white"
                :class="[
                  'px-3 py-1 text-sm leading-5 ',
                  'focus:outline-none',
                  selected
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-10">
            
            <TabPanel>
              <div class="p-5">
                <p class="text-xl font-semibold mb-2">Personal Information</p>
                <p class="border-b border-gray-300 pb-10 mb-8">
                  Talented Full-stack developer with five years of experience.
                </p>
                <div
                  class="
                    grid grid-cols-12
                    gap-5
                    border-b border-gray-300
                    pb-10
                    mb-10
                  "
                >
                 </div>

              </div>
            </TabPanel>
            <!-- <TabPanel>
              <div class="grid grid-cols-12 gap-5">
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <img
                      class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                      src="/images/faces/16.jpg"
                      alt=""
                      srcset=""
                    />
                    <h5 class="text-lg">Jassica Hike</h5>
                    <p>UI/UX Designer</p>
                    <p class="my-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae cumque.
                    </p>

                    <BaseBtn rounded class="bg-purple-500 text-white"
                      >Contact Jassica</BaseBtn
                    >
                    <div class="card-socials-simple mt-4">
                      <a class="mr-2 hover:text-purple-500" href="#">
                        <i class="i-Linkedin-2"></i>
                      </a>
                      <a class="mr-2 hover:text-purple-500" href="#">
                        <i class="i-Facebook-2"></i>
                      </a>
                      <a class="mr-2 hover:text-purple-500" href="#">
                        <i class="i-Twitter"></i>
                      </a>
                    </div>
                  </BaseCard>
                </div>
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <div class="card-body text-center">
                      <img
                        class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                        src="/images/faces/2.jpg"
                        alt=""
                        srcset=""
                      />
                      <h5 class="text-lg">Frank Powell</h5>
                      <p>UI/UX Designer</p>
                      <p class="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                      </p>
                      <BaseBtn rounded class="bg-purple-500 text-white"
                        >Contact Frank</BaseBtn
                      >
                      <div class="card-socials-simple mt-4">
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Linkedin-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Facebook-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Twitter"></i>
                        </a>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <div class="card-body text-center">
                      <img
                        class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                        src="/images/faces/3.jpg"
                        alt=""
                        srcset=""
                      />
                      <h5 class="text-lg">Arthur Mendoza</h5>
                      <p>UI/UX Designer</p>
                      <p class="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                      </p>
                      <BaseBtn rounded class="bg-purple-500 text-white"
                        >Contact Arthur</BaseBtn
                      >
                      <div class="card-socials-simple mt-4">
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Linkedin-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Facebook-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Twitter"></i>
                        </a>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <div class="card-body text-center">
                      <img
                        class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                        src="/images/faces/4.jpg"
                        alt=""
                        srcset=""
                      />
                      <h5 class="text-lg">Jacqueline Day</h5>
                      <p>UI/UX Designer</p>
                      <p class="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                      </p>
                      <BaseBtn rounded class="bg-purple-500 text-white"
                        >Contact Jacqueline
                      </BaseBtn>
                      <div class="card-socials-simple mt-4">
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Linkedin-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Facebook-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Twitter"></i>
                        </a>
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </TabPanel> -->
            
            <!-- <TabPanel>
              <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/headphone-1.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/headphone-2.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/headphone-3.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/iphone-1.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/iphone-2.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/watch-1.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </TabPanel> -->
          </TabPanels>
        </TabGroup>
      </div>
    </BaseCard>
  </div>
</template>

<script>

export default {
  async created() {
    this.$store.dispatch("profile/fetchAdminData");
  },

  computed: {
    user() {
      return this.$store.getters["profile/adminData"];
    },
  },
};

</script>

<style lang="scss" scoped>
.user-profile {
  .header-cover {
    background-image: url("../../../images/profile-bg.png");
    position: relative;
    background-size: cover;
    padding: 30px;
    background-repeat: no-repeat;
    height: 300px;
  }
  &::after {
    content: "";
    width: 100%;
    height: 300px;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
  }
}

.timeline {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;

  li.timeline-item {
    position: relative;
    width: 50%;
    display: inline-block;

    &:nth-child(even) {
      padding: 0 3rem 3rem 0;
      .timeline-badge {
        left: calc(100% - 24px);
      }
    }
    &:nth-child(odd) {
      float: right;
      padding: 0 0 3rem 3rem;
      margin-top: 6rem;
      .timeline-badge {
        right: calc(100% - 24px);
      }
    }
    .timeline-badge {
      position: absolute;
      width: 48px;
      height: 48px;
    }
    .badge-icon {
      display: inline-block;
      text-align: center;
      font-size: 22px;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      line-height: 48px;
    }
    .badge-img {
      display: inline-block;
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
  }
  li.timeline-group {
    position: relative;
    z-index: 99;
    padding: 0 0 2rem 0;
  }
  .timeline-line {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background: #d1d5db;
    left: 0;
    right: 0;
    margin: auto;
  }
}
@media (max-width: 767px) {
  .user-profile {
    .header-cover {
      height: 200px;
    }
  }

  .timeline {
    .timeline-line {
      display: none !important;
    }
    li.timeline-item {
      width: 100%;
      padding: 4rem 0 3rem !important;
      &:nth-child(odd) {
        margin-top: 1rem;
      }
      .timeline-badge {
        left: 0 !important;
        right: 0 !important;
        top: -16px;
        margin: auto;
      }
    }

    li.timeline-group {
      padding: 0 0 3rem;
    }
  }
}
</style>
