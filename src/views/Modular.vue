<template>
  <div>
    <h5>Модульные здания</h5>
    <Calculator :image="require('../assets/modular.png')"
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
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0044.jpg'), 'cost': 100000 },
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0045.jpg'), 'cost': 100000 },
        { 'title': '101', 'img': require('../assets/projects/IMG-20200302-WA0046.jpg'), 'cost': 110000 },
        { 'title': '102', 'img': require('../assets/projects/IMG-20200302-WA0047.jpg'), 'cost': 120000 },
        { 'title': '103', 'img': require('../assets/projects/IMG-20200302-WA0048.jpg'), 'cost': 130000 },
        { 'title': '104', 'img': require('../assets/projects/IMG-20200302-WA0049.jpg'), 'cost': 140000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0050.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0051.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0052.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0053.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0054.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0055.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0056.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0057.jpg'), 'cost': 150000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0058.jpg'), 'cost': 150000 },
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
