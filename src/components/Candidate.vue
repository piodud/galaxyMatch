<template>
  <div>

    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true" paginationColor="#ce6c90">

      <slide>
        <div class="candidate">
          <img v-bind:src="image" class="rounded mx-auto d-block .img-fluid">
          <h4 class="d-flex justify-content-center"> {{ name }} </h4>
          <!--          <p class="d-flex justify-content-center">Species: {{ species }}</p>-->
        </div>
      </slide>

      <slide>
        <div class="candidate">
          <div class="row">
            <div class="col-sm detailed-info">
              <h4>{{ name }} </h4>
              <hr/>
              Species: {{ species }} <br>
              Homeworld: {{ homeworld }}<br>
              Mass: {{ mass }}<br>
              Gender: {{ gender }}<br>
              EyeColor: {{ eyeColor }}<br>
              SkinColor: {{ skinColor }}<br>
              <hr/>
            </div>
            <div class="col-sm-5 image-detail"><img v-bind:src="image" width="200px"
                                                    class="rounded mx-auto d-block .img-fluid"></div>
          </div>
          <div class="overflow-auto description">
            Description: {{ description }}
          </div>


        </div>

      </slide>
    </carousel>

    <LeftOrRight v-on:next-candidate="nextCandidate"/>

  </div>
</template>

<script>
import axios from 'axios'
import LeftOrRight from './LeftOrRight.vue'
import {Carousel, Slide} from 'vue-carousel';


export default {
  name: "Candidate",
  components: {
    LeftOrRight: LeftOrRight,
    Carousel,
    Slide,
  },

  data() {
    return {
      name: null,
      species: null,
      image: null,
      homeworld: null,
      height: null,
      mass: null,
      gender: null,
      eyeColor: null,
      skinColor: null,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    }
  },
  mounted() {
    this.newCandidate()
  },
  methods: {
    nextCandidate() {
      this.newCandidate();
    },

    newCandidate() {
      let next_character = 1 + Math.floor((87) * Math.random());
      axios
          .get('https://akabab.github.io/starwars-api/api/id/' + next_character + '.json')
          .then(response => {
            console.log(response);
            this.name = response.data.name;
            this.homeworld = response.data.homeworld;
            this.species = response.data.species;
            this.image = response.data.image;
            this.height = response.data.height;
            this.mass = response.data.mass;
            this.gender = response.data.gender;
            this.eyeColor = response.data.eyeColor;
            this.skinColor = response.data.skinColor;
          })
          .catch(error => console.log(error))
    }
  }

}
</script>

<style scoped>
img {
  padding: 10px;
  max-height: 400px;
  height: auto;
  max-width: 100%;
}

.candidate {
  background-color: white;
  margin-left: 10%;
  margin-right: 10%;
  box-shadow: 10px 10px 10px 12px #e7caca;
  height: 450px;
}

.detailed-info {
  padding: 15px;
  padding-left: 40px;
}

.description {
  padding-left: 30px;
  padding-right: 30px;
  max-height: 150px;
}

@media (max-width: 767.98px) {
  .image-detail {
    display: None;
  }

}
</style>
