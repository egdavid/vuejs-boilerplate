<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-3">
    <b-navbar-brand :to="{ name: 'home' }">{{ $appName }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-item" tag="li" :to="{ name: 'repository' }"><a class="nav-link">Repository</a></router-link>
        <router-link class="nav-item" tag="li" :to="{ name: 'portal' }"><a class="nav-link">Portal</a></router-link>
        <router-link class="nav-item" tag="li" :to="{ name: 'profile' }"><a class="nav-link">Profile (protected route)</a></router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown
          v-if="authenticated"
          right
        >
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Link</b-dropdown-item>
          <b-dropdown-item href="#">Another Link</b-dropdown-item>
          <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-form
          v-else
          v-on:submit.prevent
        >
          <b-form-input v-model="loginData.login" size="sm" class="mr-sm-2" placeholder="Any username" required></b-form-input>
          <b-form-input v-model="loginData.password" size="sm" class="mr-sm-2" type="password" placeholder="Any password" required></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="login(loginData)">Login</b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Navbar',
    data() {
      return {
        loginData: {
          login: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters(['authenticated'])
    },
    methods: {
      ...mapActions(['login', 'logout'])
    }
  }
</script>
