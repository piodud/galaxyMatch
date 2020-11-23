<template>

  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" style="font-family: 'Kaushan Script', cursive;">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand href="/#/">
        Galactic
        <ion-icon name="heart-half-outline"></ion-icon>
        Match
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>

          <b-nav-item href="/#/profile">
            <ion-icon name="person"></ion-icon>
            Profile
          </b-nav-item>
          <b-nav-item href="/#/settings">
            <ion-icon name="cog"></ion-icon>
            Settings
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
export default {
  name: "Nav"
}
</script>

<style>

</style>
