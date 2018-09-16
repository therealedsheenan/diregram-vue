<template>
  <v-card>
    <v-card-title>
      <span class="headline">New Post</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <form class="post" @submit.prevent="requestPost">
            <v-flex xs12>
              <v-text-field v-model="image" label="Image" required type="file"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="caption" label="Caption" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="title" label="Title" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <!--<v-text-field v-model="name" label="Name" required></v-text-field>-->
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
      name: '',
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
        const { name, caption, title, image } = this;
        const newPost = new FormData();
        newPost.name = name;
        newPost.caption = caption;
        newPost.title = title;
        newPost.image = image;
        this.$store.dispatch(REQUEST_NEW_POST, newPost)
          .then((res) => {
            console.log('new post success.')
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
