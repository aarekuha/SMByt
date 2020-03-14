<template>
  <div class="container-fluid">
    <b-row>
      <b-col class="d-none d-lg-block"></b-col>
      <b-col v-for="item in $parent.items"
             v-bind:key="item.name"
             lg="3" md="4" sm="12"
             >
        <router-link :to="item.link">
          <div>
            <img v-lazy="item.image"/>
          </div>
          {{ item.name }}
        </router-link>
      </b-col>
      <b-col class="d-none d-lg-block"></b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  background-color: $lightgray;
}

img {
  max-height: 80px;
  margin-bottom: 15px;
}

.row {
  padding: 50px;
  text-transform: uppercase;
}

a {
  color: $black;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }

  &.router-link-active {
    color: $blue;
  }
}

.col div {
  height: 100px;
}
</style>
