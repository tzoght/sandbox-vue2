<template>
  <div>
      <tz-server-status v-for="server in 5" v-bind:key="server"></tz-server-status>
  </div>
</template>

<script>
  import  ServerStatus from './ServerStatus.vue'
  export default  {
    components: {
      'tz-server-status': ServerStatus
    },
  }
</script>
