<template>
  <div>
    <h5>Торговые павильоны</h5>
    <Calculator :image="require('../assets/pavilion.png')"
                :items="properties" />
    <h5>Выполненные объекты</h5>
    <b-row>
      <Card v-for="(item, index) in items"
            v-bind:key="index"
            :item="item"
            />
    </b-row>
  </div>
</template>

<script>
import Calculator from '../components/calculator.vue'
import Card from '../components/card.vue'

export default {
  data() {
    return {
      items: [
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0002.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0003.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0004.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0005.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0006.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0007.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0008.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0009.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0010.jpg'), 'cost': 100000 },
        { 'title': '101', 'img': require('../assets/projects/IMG-20200302-WA0011.jpg'), 'cost': 110000 },
        { 'title': '102', 'img': require('../assets/projects/IMG-20200302-WA0012.jpg'), 'cost': 120000 },
        { 'title': '103', 'img': require('../assets/projects/IMG-20200302-WA0013.jpg'), 'cost': 130000 },
        { 'title': '104', 'img': require('../assets/projects/IMG-20200302-WA0014.jpg'), 'cost': 140000 },
      ],
      properties: [
        { 'name': 'Размер', 'options': [ { 'text': '123', 'value': 123 },
                                         { 'text': '223', 'value': 223 },
                                         { 'text': '323', 'value': 323 },
                                         { 'text': '423', 'value': 423 },
                                         { 'text': '523', 'value': 523 },
                                         { 'text': '623', 'value': 623 },
                                       ] },
        { 'name': 'Планировка', 'options': [{ 'text': '', 'value': 123 }] },
        { 'name': 'Внутренняя отделка', 'options': [{ 'text': '', 'value': 123 }] },
        { 'name': 'Наружная отделка', 'options': [{ 'text': '', 'value': 123 }] },
        { 'name': 'Дверь', 'options': [{ 'text': '', 'value': 123 }] },
        { 'name': 'Окна', 'options': [{ 'text': '', 'value': 123 }] },
      ],
    }
  },
  components: {
    Calculator,
    Card,
  }
}
</script>

<style lang="scss" scoped>
h5 {
  display: block;
  margin: 20px;
}
</style>
