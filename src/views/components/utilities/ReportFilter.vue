<template>
  <div class="relative text-lg text-gray-400 w-48">
    <button
      class="
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
      "
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <span class="text-gray-400">{{ selectedOption }}</span>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4 transform transition-transform duration-200 text-gray-400 ease-in-out"
        :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isOptionsExpanded"
        class="
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
        "
      >
        <li
          v-for="option in options"
          :key="option"
          @click="() => filterData(option)"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
          @mousedown.prevent="setOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["filterData","options"],
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: "All",
      };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
  },
};
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
