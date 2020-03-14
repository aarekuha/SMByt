<template>
  <b-col sm="6" md="4" lg="3">
    <span class="card-title"></span>
    <img v-lazy="item.img"/>
    <span class="card-cost">
      <p>Арт. {{ item.title }}</p>
      {{ item.cost }}р.
    </span>
  </b-col>
</template>

<script>
export default {
  props: [ 'item' ],
  components: {
  }
}
</script>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease-out;
}

img {
  width: 70%;
}

div[class^="col"] {
  margin: 20px 0px;
  &:hover .card-cost {
    color: $blue;
    box-shadow: 0px 0px 30px 20px white;
  }
}

.card-cost {
  position: absolute;
  right: 10px;
  bottom: 0px;
  font-weight: bold;
  background-color: white;
  color: $black;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 10px white;
  padding: 10px;
  text-align: right;

  & p {
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: -5px;
  }
}
</style>
