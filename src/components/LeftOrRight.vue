<template>
  <div class="decision-buttons d-flex justify-content-center">

    <button v-on:click="$emit('next-candidate')" class="refresh-star-btn refresh">
      <ion-icon name="refresh"></ion-icon>
    </button>

    <button v-on:click="$emit('next-candidate')" class="left-or-right-btn no">
      <ion-icon name="close"></ion-icon>
    </button>

    <button v-on:click="$emit('next-candidate')" class="left-or-right-btn yes">
      <ion-icon name="heart"></ion-icon>
    </button>

    <button v-on:click="$emit('next-candidate')" class="refresh-star-btn star">
      <ion-icon name="star"></ion-icon>
    </button>


  </div>
</template>

<script>
import Candidate from "@/components/Candidate";


export default {
  name: "LeftOrRight",
  methods: {
    yes() {
      alert('Yes!');
      Candidate.nextCandidate();
    },
    no() {
      alert('No.');
      Candidate.nextCandidate();

    }
  }
}

</script>

<style scoped>
.decision-buttons {
  padding: 15px;
}

.left-or-right-btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.refresh-star-btn {

  width: 50px;
  height: 50px;
  border-radius: 50%;
}


button {
  background-color: white;
  border: white;
  margin: 7px;
}

ion-icon {
  padding-top: 6px;
  font-size: 60px;
}

.refresh-star-btn ion-icon {
  padding-top: 6px;
  font-size: 30px;
}


.yes ion-icon {
  color: #53e2a1;
}

.no ion-icon {
  color: #ea4242;
}

.refresh ion-icon {
  color: #f6d158;
}

.star ion-icon {
  color: #45f1f6;
}


</style>
