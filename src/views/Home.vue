<template>
  <div class="d-flex flex-column h-100">
    <Header />
    <b-container>
      <b-row>
        <b-col>
          <p>Here goes the content.</p>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header/Header.vue'
  import Footer from '@/components/Footer/Footer.vue'
  export default {
    name: 'Home',
    components: {
      Header,
      Footer
    },
    data() {
      return {

      }
    },
    computed: {

    },
    created() {

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
