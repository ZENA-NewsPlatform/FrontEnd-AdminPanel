<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">Editor's list</h2>
    <div class="flex items-center space-x-1 text-xs">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
        </div>
  </div>
  <div>
    <h4 class="text-sm pl-8"> {{resultsCounter}} editors</h4>
  </div>
 
  <div class="p-4 mt-0 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
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
              placeholder="Search editor"
            />
          </div>
        </div>
        
        <div>
          <div>
            <button
            @click="createAccount"
              class="
                flex
                items-center
                bg-green-500
                p-2
                text-white
                rounded
                text-sm
                hover:bg-green-600
              "
            >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg> 

              Add New
            </button>
          </div>
        </div>
      </div>

      <!-- EDITOR"S TABLE OF REPORT -->
      <ReportTable :users="users">
       <!-- TABLE HEADERS -->
       <template v-slot:th1>NAME</template>  
       <template v-slot:th2>TYPE</template>
       <template v-slot:th3>STATUS</template>
       <template v-slot:th4>TOTAL POSTS</template>
       <template v-slot:th5>START DATE</template>
       <template v-slot:th6>OPERATIONS</template>
  
     </ReportTable>

</template>

<script>
import ReportTable from '../../components/utilities/ReportTable.vue'

export default {
  components:{
    ReportTable,
  }

  
  }
</script>

<style>

</style>