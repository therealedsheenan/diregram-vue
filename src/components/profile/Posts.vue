<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <div v-if="isLoading" class="article-preview">
          Loading posts...
        </div>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <v-card v-for="post in posts" class="mt-4">
              <div class="card-link">
                <div class="card-author">
                  <router-link v-bind:to="'/profile/' + post.owner._id">
                    <h3>{{ post.owner.username }}</h3>
                  </router-link>
                </div>
                <v-img
                  v-bind:src="uploadAddress + post.image.image"
                ></v-img>
                <v-card-title>
                  <div>
                    <h3 class="headline mt-0">{{ post.title }}</h3>
                    <div>{{ post.caption }}</div>
                  </div>
                </v-card-title>
              </div>
            </v-card>
          </v-layout>
        </v-slide-y-transition>
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
      uploadAddress: "http://localhost:8000/"
    }),
    mounted () {
      this.fetchAllPosts();
    },
    computed: {
      ...mapGetters([
        'isLoading',
        'posts'
      ])
    },
    methods: {
      fetchAllPosts () {
        this.$store.dispatch(FETCH_ALL_POSTS);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #666;
  }
</style>
