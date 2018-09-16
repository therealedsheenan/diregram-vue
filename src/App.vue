<template>
  <v-app>
    <Navigation />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Timeline from './components/Timeline'
  import Navigation from './components/Navigation';

  export default {
    name: 'App',
    components: {
      Timeline,
      Navigation
    },
    data: () => {
      return {
        title: 'Diregram'
      }
    },
  }
</script>
