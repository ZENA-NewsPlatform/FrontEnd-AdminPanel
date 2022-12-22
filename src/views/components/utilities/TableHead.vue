<template>
  <div class="flex justify-between px-4 mt-0 ml-10 sm:px-8">
    <h2 class="text-2xl text-gray-600 font-bold">
      <slot name="table-title"></slot>
    </h2>
    <div class="flex items-center space-x-1 text-xs">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-2 w-2"
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
    </div>
  </div>
  <div class="ml-8">
    <h4 class="text-sm text-gray-400"><slot name="results-counter"></slot></h4>
  </div>
  <!-- <AddPublisher v-if="creating"></AddPublisher> -->

  <div class="p-4 ml-1.5 mt-0 sm:px-8 sm:py-4 flex justify-between ">

    <!-- SEARCH -->
    <div class="hidden py-1.5 ml-8 mr-20 mt-0.5 bg-white rounded flex content-start">
      <div class="flex justify-between">
        <div>
          <div class="relative text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              id="search"
              name="search"
              type="search"
              class="
                w-full
                py-2
                text-sm text-gray-900
                rounded-md
                pl-10
                border border-gray-300
                focus:outline-none
                focus:ring-gray-500
                focus:ring-gray-500
                focus:z-10
              "
              placeholder="Search publisher"
            />
          </div>
        </div>
      </div>

    </div>

    <!-- FILTER -->
    <div class="text-black-400 ml-80">
      <slot name="report-filter"> </slot>
    </div>

    <!-- ADD -->
    <div>
      <div class="ml-2 ">
        <slot name="add-new"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
