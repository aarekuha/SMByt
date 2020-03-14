<template>
  <div>
    <h5>Строительные бытовки</h5>
    <Calculator :image="require('../assets/cabin.png')"
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
        { 'title': '100', 'img': require('../assets/projects/IMG-20200302-WA0015.jpg'), 'cost': 100000 },
        { 'title': '101', 'img': require('../assets/projects/IMG-20200302-WA0016.jpg'), 'cost': 110000 },
        { 'title': '102', 'img': require('../assets/projects/IMG-20200302-WA0017.jpg'), 'cost': 120000 },
        { 'title': '103', 'img': require('../assets/projects/IMG-20200302-WA0018.jpg'), 'cost': 130000 },
        { 'title': '104', 'img': require('../assets/projects/IMG-20200302-WA0019.jpg'), 'cost': 140000 },
        { 'title': '105', 'img': require('../assets/projects/IMG-20200302-WA0020.jpg'), 'cost': 150000 },
        { 'title': '106', 'img': require('../assets/projects/IMG-20200302-WA0021.jpg'), 'cost': 160000 },
        { 'title': '107', 'img': require('../assets/projects/IMG-20200302-WA0022.jpg'), 'cost': 170000 },
        { 'title': '108', 'img': require('../assets/projects/IMG-20200302-WA0023.jpg'), 'cost': 180000 },
        { 'title': '109', 'img': require('../assets/projects/IMG-20200302-WA0024.jpg'), 'cost': 190000 },
        { 'title': '110', 'img': require('../assets/projects/IMG-20200302-WA0025.jpg'), 'cost': 200000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0026.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0027.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0028.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0029.jpg'), 'cost': 210000 },
        { 'title': '106', 'img': require('../assets/projects/IMG-20200302-WA0030.jpg'), 'cost': 160000 },
        { 'title': '106', 'img': require('../assets/projects/IMG-20200302-WA0031.jpg'), 'cost': 160000 },
        { 'title': '107', 'img': require('../assets/projects/IMG-20200302-WA0032.jpg'), 'cost': 170000 },
        { 'title': '108', 'img': require('../assets/projects/IMG-20200302-WA0033.jpg'), 'cost': 180000 },
        { 'title': '109', 'img': require('../assets/projects/IMG-20200302-WA0034.jpg'), 'cost': 190000 },
        { 'title': '110', 'img': require('../assets/projects/IMG-20200302-WA0035.jpg'), 'cost': 200000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0036.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0037.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0038.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0039.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0040.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0041.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0042.jpg'), 'cost': 210000 },
        { 'title': '111', 'img': require('../assets/projects/IMG-20200302-WA0043.jpg'), 'cost': 210000 },
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
