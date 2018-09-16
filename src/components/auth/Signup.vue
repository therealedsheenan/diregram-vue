<template>
  <v-card>
    <v-card-title>
      <span class="headline">Sign up</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <form class="signup" @submit.prevent="requestSignup">
            <v-flex xs12>
              <v-text-field v-model="username" label="Username" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="email" label="Email" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-flex>
            <v-btn color="red darken-1" flat @click.native="$emit('dialog-cancel')">Cancel</v-btn>
            <v-btn color="blue darken-1" type="submit" flat>Sign up</v-btn>
          </form>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>

</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { REQUEST_SIGNUP } from '@/store/types/actions';

  export default {
    name: 'Signup',
    data: () => ({
      username: '',
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
      requestSignup () {
        console.log('Signing up');
        const { username, email, password } = this;
        this.$store.dispatch(REQUEST_SIGNUP, { username, email, password })
          .then(() => {
            console.log('login success!');
            this.$router.push('/about');
          })
          .catch((err) => console.log(err));
      },
    }
  }
</script>

<style scoped lang="scss">
  form {
    display: block;
    width: 100%;
  }
</style>
