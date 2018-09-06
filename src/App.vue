<template>
  <v-app>
    <v-toolbar>
      <div class="navigation">
        <router-link to="/">
          <span class="navigation-logo">
            <img src="@/assets/logo.png" alt="diregram">
          </span>
          <v-toolbar-title v-text="title"></v-toolbar-title>
        </router-link>
        <!--<router-link to="/about">about</router-link>-->
      </div>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Timeline from './components/Timeline'

  export default {
    name: 'App',
    components: {
      Timeline
    },
    data: () => {
      return {
        title: 'Diregram'
      }
    }
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
