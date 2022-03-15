<template>
  <v-app dark>
    <v-app-bar fixed app height="100" color="#00BFA5">
      <v-row align="center" justify="center">
        <div>{{ $store.state.scrollOffset }}</div>
        <div
          v-for="typo in menu"
          :key="typo[0]"
          :class="[selectIndex == typo[0] ? `text-h3` : `text-${typo[1]}`, ,]"
          class="transition-swing px-4 menu-item mx-4"
          v-text="typo[2]"
          @click="selectMenu(typo[0])"
        ></div>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // computed: {
  //   scrollOffset() {
  //     return this.$store.state.scrollOffset;
  //   },
  // },
  data() {
    return {
      menu: [
        [0, "h4", "메뉴"],
        [1, "h4", "메뉴"],
        [2, "h4", "메뉴"],
        [3, "h4", "메뉴"],
        [4, "h4", "메뉴"],
        [5, "h4", "메뉴"],
        [6, "h4", "메뉴"],
      ],
      selectIndex: 0,
    };
  },

  methods: {
    selectMenu(index) {
      console.log("click", index);
      this.selectIndex = index;
    },
    handleScroll() {
      this.$store.commit(
        "setScrollOffset",
        document.scrollingElement.scrollTop
      );
    },
  },
};
</script>
<style scoped>
.menu-item {
  cursor: pointer;
  /* color: red; */
}
</style>
