<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs10 md8 offset-md2 lg6 offset-lg3 offset-xs1>
        <div v-if='postsIsLoading' class='article-preview'>
          Loading posts...
        </div>
        <v-slide-y-transition mode='out-in'>
          <v-layout column align-center>
            <v-card v-for='post in posts' class='mt-4 card'>
              <div class='card-link'>
                <div class='card-author'>
                  <v-avatar
                    color='grey lighten-4'
                  >
                    <img v-if="post.owner.avatar" v-bind:src="uploadAddress + post.owner.avatar" alt="avatar">
                    <img v-else src="@/assets/avatar.jpeg" alt="avatar">
                  </v-avatar>
                  <router-link v-bind:to='"/profile/" + post.owner.username'>
                    <h3>{{ post.owner.username }}</h3>
                  </router-link>
                </div>
                <img v-bind:src='uploadAddress + post.image.image' alt='post image'>
                <v-card-title>
                  <div>
                    <h3 class='headline mt-0'>{{ post.title }}</h3>
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

<script lang='ts'>
import { mapGetters } from "vuex";
import { FETCH_ALL_POSTS } from "@/store/types/actions";
export default {
  name: "Timeline",
  data: () => ({
    uploadAddress: "http://localhost:8000/"
  }),
  mounted() {
    this.fetchAllPosts();
  },
  computed: {
    ...mapGetters(["postsIsLoading", "posts"])
  },
  methods: {
    fetchAllPosts() {
      this.$store.dispatch(FETCH_ALL_POSTS);
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
img {
  width: 100%;
  height: auto;
}
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

.card {
  width: 100%;
}

.card-link {
  display: block;
  width: 100%;
  text-decoration: none;
}

.v-card__title {
  text-align: left;
}

.card-author {
  padding: 10px 20px;
  display: flex;
}

.card-author h3 {
  margin-left: 10px;
  margin-top: 0;
  text-align: left;
  vertical-align: middle;
  line-height: 2.6;
}

.v-avatar {
  overflow: hidden;
}
</style>
