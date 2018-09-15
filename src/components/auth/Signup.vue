<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <form class="login" @submit.prevent="requestSignup">
          <h1>Sign up</h1>
          <input required v-model="username" type="text" placeholder="Username" />
          <input required v-model="password" type="password" placeholder="Password" />
          <!--<input id="password-confirm" type="password" v-model="passwordConfirmation" required />-->
          <button type="submit">Login</button>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  export default {
    name: 'Signup',
    data: () => ({
      username: '',
      password: '',
      // passwordConfirmation: ''
    }),
    mounted () {
    },
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
      requestSignup () {
        // const { username, password, passwordConfirmation } = this;
        // this.$store.dispatch('requestLogin', {
        // username,
        // password,
        // });
        // .then(() => this.$router.push('/about'))
        // .catch((err) => console.log(err));
        console.log('test')
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
