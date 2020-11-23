<template>
  <div>
    <Nav/>
    <router-view></router-view>
    <Footer/>

  </div>

</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'


export default {
  components: {
    Nav: Nav,
    Footer: Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

body {
  font-family: 'Roboto Slab', serif;

}
</style>
