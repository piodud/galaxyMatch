<template>
  <div class="tinder">
    <header class="d-flex justify-content-center">
      Galactic
      <ion-icon name="heart-half-outline"></ion-icon>
      Match
    </header>

    <Candidate/>

  </div>

</template>

<script>
import Candidate from './Candidate.vue'

export default {
  name: "Tinder",
  components: {
    Candidate: Candidate,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

.tinder {
  background-color: #ffe9e9;
}

header {
  color: hotpink;
  padding: 10px;
  font-family: 'Kaushan Script', cursive;

}
</style>




