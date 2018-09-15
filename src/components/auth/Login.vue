<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <form class="login" @submit.prevent="requestLogin">
          <h1>Login</h1>
          <input required v-model="email" type="email" placeholder="Email"/>
          <input required v-model="password" type="password" placeholder="Password"/>
          <hr/>
          <button type="submit">Login</button>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  export default {
    name: 'Login',
    data: () => ({
      email: '',
      password: ''
    }),
    mounted () {
    },
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
      requestLogin () {
        console.log('logging in');
        const { email, password } = this;
        this.$store.dispatch('requestLogin', { email, password })
          .then(() => this.$router.push('/about'))
          .catch((err) => console.log(err));
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
