<template>
  <div class="container">
    <b-row>
      <b-col lg="4" class="d-none d-lg-block d-xl-block">
        <img v-lazy="image" alt=""/>
      </b-col>
      <b-col lg="8">
          <template v-for="(item, index) in items">
            <b-form-group :key="index"
                          label-cols-sm="4"
                          label-cols-lg="3"
                          :label="item.name"
                          :label-for="'input-' + index">
              <b-form-select :id="'input-' + index"
                             v-model="costs[index]"
                             :options="item.options"
                             :value="item.options[0].value"
                             style="display: inline-block;"
                             />
            </b-form-group>
          </template>
          <div class="total">Итого: <span>{{ total }}р.</span></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: [ 'image', 'items' ],
  data() {
    return {
      total: 0,
      costs: [],
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}

.d-block {
  display: inline-block!important;
}

.d-none {
  margin: auto;
}

.total {
  color: $blue;
  text-align: right;
  font-size: 1.2rem;

  & span {
    font-weight: bold;
  }
}
</style>
