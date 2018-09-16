<template>
  <v-card>
    <v-card-title>
      <span class="headline">Login</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <form class="login" @submit.prevent="requestLogin">
            <v-flex xs12>
              <v-text-field v-model="email" label="Email" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-flex>
            <v-btn color="red darken-1" flat @click.native="$emit('dialog-cancel')">Cancel</v-btn>
            <v-btn color="blue darken-1" type="submit" flat>Login</v-btn>
          </form>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>

</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { REQUEST_LOGIN } from '@/store/types/actions';

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
        const { email, password } = this;
        this.$store.dispatch(REQUEST_LOGIN, { email, password })
          .then((res) => {
            // console.log(res);
            // this.$router.push(`/profile/${res.data.username}`)
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
