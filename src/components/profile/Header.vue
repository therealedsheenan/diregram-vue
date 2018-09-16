<template>
  <!--<div v-if='postsIsLoading' class='article-preview'>-->
    <!--Loading posts...-->
  <!--</div>-->
  <v-layout row wrap class="profile-header">
    <v-flex justify-center align-center xs3>
      <img src='@/assets/logo.png' alt='avatar'>
    </v-flex>
    <v-flex flex align-center xs9>
      <div class="profile-info">
        <h2>{{ profile.username }}</h2>
        <p>Email: {{ profile.email }}</p>
        <p>Created at: {{ profile.createdAt }}</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { REQUEST_PROFILE } from '@/store/types/actions';

  export default {
    name: 'Header',
    data: () => ({
    }),
    mounted () {
      this.requestUserInfo();
    },
    computed: {
      ...mapGetters([
        'profile',
        'profileIsLoading'
      ])
    },
    methods: {
      requestUserInfo () {
        if (this.$route.params.username) {
          this.$store.dispatch(REQUEST_PROFILE, this.$route.params.username)
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .profile-header {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;

    .profile-info {
      padding-left: 10px;
      p {
        margin: 0;
      }
    }
  }
</style>
