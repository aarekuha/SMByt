<template>
  <div class="container">
    <b-navbar toggleable="lg" type="light" variant="none">
      <b-navbar-brand href="#"><w>Строй</w> <w>Модуль</w> <w>Быт</w></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <router-link tag="b-nav-item" to="/">Home</router-link>
          <router-link tag="b-nav-item" to="/About">About</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  components: {
  }
}
</script>

<style lang="scss">

w {
  &:nth-child(1) { color: $red!important; }
  &:nth-child(2) { color: $blue!important; }
  &:nth-child(3) { color: $gray!important; }
}
</style>
