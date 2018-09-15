<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <h1>This page is protected</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  export default {
    name: 'Protected',
    data: () => ({
    }),
    mounted () {
    },
    computed: {
      ...mapGetters([
      ])
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">

</style>
