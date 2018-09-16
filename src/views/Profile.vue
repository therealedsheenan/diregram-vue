<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs10 md8 offset-md2 lg6 offset-lg3 offset-xs1>
        <div class="profile">
          <ProfileHeader />
          <ProfilePosts />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ProfileHeader from '@/components/profile/Header.vue';
  import ProfilePosts from '@/components/profile/Posts.vue';

  @Component({
    components: {
      ProfileHeader,
      ProfilePosts
    },
    data: () => {
      return {}
    },
    mounted () {
      // this.fetchUserPosts();
    },
    methods: {
      fetchUserPosts() {
        // $route.params.username
        // this.$store.dispatch(FETCH_USER_POSTS);
      }
    }
  })
  export default class Profile extends Vue {}
</script>
