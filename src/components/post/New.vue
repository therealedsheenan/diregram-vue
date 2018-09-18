<template>
  <v-card>
    <v-card-title>
      <span class="headline">New Post</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <form class="post" enctype="multipart/form-data" @submit.prevent="requestPost">
            <v-flex xs12>
              <input type="file" @change="onFileChange">
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="caption" label="Caption" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="title" label="Title" required></v-text-field>
            </v-flex>
            <v-btn color="red darken-1" flat @click.native="$emit('dialog-cancel')">Cancel</v-btn>
            <v-btn color="blue darken-1" type="submit" flat>Post</v-btn>
          </form>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>

</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { REQUEST_NEW_POST } from '../../store/types/actions';

  export default {
    name: 'Login',
    data: () => ({
      caption: '',
      title: '',
      image: ''
    }),
    mounted () {
    },
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
      requestPost () {
        const newPost = new FormData();
        const {
          caption,
          title,
          image
        } = this;
        newPost.append("post[caption]", caption);
        newPost.append("post[title]", title);
        newPost.append("post[image]", image);
        this.$store.dispatch(REQUEST_NEW_POST, newPost)
          .then((res) => {
            console.log('new post success.')
          })
          .catch((err) => console.log(err));
      },
      onFileChange (e: object) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        this.image = files[0];
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
