<template>
  <div class="home">
    <Timeline />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Timeline from '@/components/Timeline.vue';

  @Component({
    components: {
      Timeline,
    },
    data: () => {
      return {}
    }
  })
  export default class Home extends Vue {}
</script>
