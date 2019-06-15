<template>
  <div class="d-flex flex-column h-100">
    <Header />
    <b-container>
      <b-row>
        <b-col>
          <div v-show="!isLoading">
            <p>Content fetched from an API using the Repository</p>
            <pre>
              {{ base }}
            </pre>
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

  import { RepositoryFactory } from '@/repositories/RepositoryFactory'
    const ExampleRepository = RepositoryFactory.get('example')

  export default {
    name: 'Repository',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        isLoading: false,
        base: {}
      }
    },
    computed: {

    },
    created() {
      this.fetchExample()
    },
    methods: {
      async fetchExample () {
        this.isLoading = true
        const { data } = await ExampleRepository.get()
        this.isLoading = false
        this.base = data;
      },
    }
  }
</script>

<style scoped>

</style>
