<template>
  <div class="row settings">
    <h1> Work in progress
      <FacebookLoader :color="randomcolor"/>
      <FacebookLoader/>
    </h1>

  </div>
</template>

<script>
import {FacebookLoader} from 'vue-spinners-css';

export default {
  name: "Settings",
  components: {
    FacebookLoader,
  },
}

</script>

<style scoped>
h1 {
  margin: auto
}

.settings {
  height: 600px;
}
</style>
