<template>
  <!--<div v-if="isLoading" class="article-preview">-->
  <!--Loading posts...-->
  <!--</div>-->
  <v-container fluid grid-list-lg text-xs-center class="profile-container">
    <v-layout class="profile-posts" row wrap>
      <v-flex  grid-list-md v-for="post in posts" :key="`${post._id}`" xs4 class="post-wrapper">
        <div class="post-image">
          <img v-bind:src='uploadAddress + post.image.image' alt="">
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { FETCH_ALL_POSTS } from '@/store/types/actions';
  export default {
    name: 'Posts',
    data: () => ({
      uploadAddress: 'http://localhost:8000/'
    }),
    mounted () {
      this.requestUserPosts();
    },
    computed: {
      ...mapGetters([
        'postsIsLoading',
        'posts'
      ])
    },
    methods: {
      requestUserPosts () {
        if (this.$route.params.username) {
          this.$store.dispatch(FETCH_ALL_POSTS, this.$route.params.username);
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .profile-posts {
    margin-top: 30px !important;
  }

  .profile-container {
    padding: 0;
  }

  .post-image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .post-wrapper {
    overflow: hidden;
  }
</style>
