<template>
  <div class="home-page">
    <h5>Работать с нами выгодно</h5>
    <b-card-group deck>
      <b-card v-for="slide in slides"
              v-bind:key="slide.title"
              no-body >
        <img :src="slide.icon" />
        <h6>{{ slide.title }}</h6>
        <span>{{ slide.text }}</span>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          'icon': require("../assets/costs.png"),
          'title': 'Цены',
          'text': 'Работаем в обоих сегментах рынка: эконом и премиум'
        },
        {
          'icon': require("../assets/completed.png"),
          'title': 'Готовые изделия',
          'text': 'У нас всегда есть готовые решения'
        },
        {
          'icon': require("../assets/clock.png"),
          'title': 'Время',
          'text': 'Сдаем объекты в срок'
        },
        {
          'icon': require("../assets/quality.png"),
          'title': 'Качество',
          'text': 'Контроль качества на каждом этапе'
        },
        {
          'icon': require("../assets/possibility.png"),
          'title': 'Безграничные возможности',
          'text': 'Выполняем заказ любой сложности'
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h5 {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
}

$pageMargins: 50px;
$transitionTime: 0.5s;

.home-page {
  margin-top: $pageMargins!important;
  margin-bottom: $pageMargins!important;
}

.card {
  padding: 30px 15px;
  box-shadow: 0px 10px 10px #bbbbbb;
  transition: all $transitionTime ease;

  &:hover {
    transform: scale(1.1);
    transition: all $transitionTime ease;
    box-shadow: 0px 30px 25px #cccccc;
  }

  & img {
    width: 50px;
    height: 50px;
    margin: auto;
  }

  & h6 {
    display: block;
    margin-top: 10px;
    font-weight: bold;
    height: 40px;
  }

  & span {
    display: block;
    margin-top: 20px;
  }
}
</style>
