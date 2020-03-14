<template>
  <div>
    <div class="container-fluid blue">
      <div class="container">
        <b-row>
          <b-col md="4" lg="3" class="d-none d-lg-block">
            <img class="to-bottom" v-lazy="'' + require('../assets/mobile.png')" />
          </b-col>
          <b-col class="footer-text" md="4" lg="3">
            <h6>Рассчитать стоимость</h6>
            <p>Предоставляем бесплатную информационную и техническую поддержку всем нашим клиентам.</p>
            <p>Проводим акции и практикуем индивидуальные расценки, при комплектовании крупных объектов.</p>
            <p>Обращайтесь к нам по телефону<br/>{{ $parent.telephone }}<br/> и мы расскажем Вам об этом подробнее.</p>
            <b-button variant="light" href="#body">Посчитать стоимость</b-button>
          </b-col>
          <b-col md="4" lg="3" class="d-none d-md-block">
            <img v-lazy="'' + require('../assets/calc.png')" />
          </b-col>
        </b-row>
      </div>
    </div>
    <Header/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
$margins: 20px;

.container-fluid.blue {
  padding: 50px 70px;
  margin-bottom: 40px;
  background-color: $blue;
  color: white;
}

.footer-text {
  margin: auto;
  min-width: 300px;
}

h6 {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: $margins;
}

button {
  margin-top: $margins;
  color: $blue;
}

p {
  font-size: 0.9rem;
}

.to-bottom {
  position: absolute;
  bottom: 20px;
  right: 10px;
}
</style>
