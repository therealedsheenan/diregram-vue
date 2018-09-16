<template>
  <v-toolbar>
      <v-layout wrap class="navigation">
        <v-flex justify-center align-center xs3>
          <router-link to="/">
            <span class="navigation-logo">
              <img src="@/assets/logo.png" alt="diregram">
            </span>
            <v-toolbar-title v-text="title"></v-toolbar-title>
          </router-link>
        </v-flex>
        <v-flex align-content-end xs9 class="text-xs-right">
          <v-btn v-if="isAuthed" color="error" dark @click="logout">Logout</v-btn>
          <span v-else>
            <v-dialog v-model="loginDialog" max-width="500px">
              <v-btn slot="activator" color="primary" dark>Login</v-btn>
              <Login v-on:dialog-cancel="loginDialog = false" />
            </v-dialog>
            <v-dialog v-model="signupDialog" max-width="500px">
              <v-btn slot="activator" color="primary" dark>Sign up</v-btn>
              <Signup v-on:dialog-cancel="signupDialog = false" />
            </v-dialog>
          </span>
        </v-flex>
      </v-layout>
  </v-toolbar>
</template>
<script lang="ts">
  import { mapGetters } from 'vuex';
  import { REQUEST_LOGOUT } from '@/store/types/actions';
  import Login from '@/components/auth/Login';
  import Signup from '@/components/auth/Signup';

  export default {
    name: 'Navigation',
    components: {
      Login,
      Signup
    },
    data: () => {
      return {
        title: 'Diregram',
        loginDialog: false,
        signupDialog: false
      }
    },
    computed: {
      ...mapGetters([
        'isAuthed'
      ])
    },
    methods: {
      logout () {
        this.$store.dispatch(REQUEST_LOGOUT)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => console.log('Unable to logout.'))
      }
    },
  }
</script>

<style scoped lang="scss">
  .navigation {
    > a {
      display: inline-block;
      height: 30px;
    }

    &-logo {
      width: 30px;
      height: 30px;
      display: inline-block;
      img {
        width: 100%;
        height: auto;
      }
    }

    .v-toolbar__title:not(:first-child) {
      display: inline-block;
      margin-left: 10px;
    }
  }
</style>
