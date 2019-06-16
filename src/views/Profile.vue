<template>
  <div class="d-flex flex-column h-100">
    <Header />
    <b-container>
      <b-row>
        <b-col>
          <div>
            You are logged in as <strong>{{ profile.username }}</strong>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>

  import Header from '@/components/Header/Header.vue'
  import Footer from '@/components/Footer/Footer.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Profile',
    components: {
      Header,
      Footer
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['profile'])
    },
    created() {

    },
    methods: {

    }
  }

</script>

<style scoped>

</style>
