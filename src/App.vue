<template>
  <main
    class="
      min-h-screen
      bg-green-50
      text-gray-700
      dark:bg-gray-900 dark:text-purple-50
    "
  >
    <ThemeToggler />
    <slot />
    <router-view />
  </main>
</template>
<script>
import ThemeToggler from "./components/ThemeToggler.vue";
 import { mapGetters} from 'vuex';
export default {
  components: { ThemeToggler },
  created() {
    if (!localStorage.getItem("token")) this.$router.replace("/signin");
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>
