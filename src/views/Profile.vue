<template>
  <div class="home">
    <Timeline />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Timeline from '@/components/Timeline.vue'; // @ is an alias to /src

  @Component({
    components: {
      Timeline,
    },
    data: () => {
      return {}
    }
  })
  export default class Profile extends Vue {}
</script>
