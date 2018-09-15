<template>
  <div class="home">
    <Login />
    <Timeline />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Timeline from '@/components/Timeline.vue';
  import Login from '@/components/auth/Login.vue';

  @Component({
    components: {
      Timeline,
      Login
    },
    data: () => {
      return {}
    }
  })
  export default class Home extends Vue {}
</script>
