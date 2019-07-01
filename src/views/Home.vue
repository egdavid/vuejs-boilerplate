<template>
  <div class="d-flex flex-column h-100">
    <Header />
    <b-container>
      <b-row>
        <b-col>
          <div>
            Here goes the content!
            <portal v-if="usePortal" to="destination">
              <p>This slot content will be rendered at the Portal destination component.</p>
            </portal>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      usePortal: true
    };
  },
  computed: {},
  created() {
    /* Access global cookie set in main.js (line 38) */
    console.log($cookies.get("appName"));
  },
  methods: {}
};
</script>

<style scoped>
</style>
