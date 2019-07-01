<template>
  <div id="app" class="h-100">
    <router-view />
    <vue-progress-bar />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
:focus {
  outline: none;
}
::-moz-focus-inner {
  border: 0;
}
html,
body {
  height: 100%;
  font-family: "Source Sans Pro", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
