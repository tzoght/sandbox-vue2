<template>
  <div>
    <p>Server satus is {{status}}</p>
    <hr>
    <p><button @click="critical()">change</button></p>
  </div>
</template>

<script>
  export  default {
    // data: function()
    // data() // ES6
    data() {
      return {
        status: 'Normal'
      }
    },
    methods: {
      critical : function () {
        this.status = 'Critical'
      }
    }
  }
</script>
