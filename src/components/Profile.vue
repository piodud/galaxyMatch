<template>
  <div class="row profile">
    <h1> Work in progress
      <FacebookLoader :color="randomcolor"/>
      <FacebookLoader/>
    </h1>

  </div>
</template>

<script>
import {FacebookLoader} from 'vue-spinners-css';

export default {
  name: "Profile",
  components: {
    FacebookLoader,
  },
}

</script>

<style scoped>
h1 {
  margin: auto
}

.profile {
  height: 600px;
}
</style>
