<template>
  <div id="app">
    <Header/>
    <Menu/>
    <div class="container body">
      <a name="body"></a>
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </div>
    <Footer/>
    <Header/>
    <GoTop bg-color="gray" :bottom="50"/>
  </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top';
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Menu from './components/menu.vue'

export default {
  data () {
    return {
      logo: '' + require("./assets/logo.png"),
      telephone: "+7 777 777 77 77",
      email: "strojmodylbyt@gmail.com",
      address: "г. Екатеринбург, ул. Ленина, д. 172, оф. 14",
      items: [
        {
          'name': 'Бытовки',
          'link': '/cabin',
          'image': require('./assets/cabin.png')
        },
        {
          'name': 'Модульные здания',
          'link': "/modular",
          'image': require('./assets/modular.png')
        },
        {
          'name': 'Торговые павильоны',
          'link': "/pavilion",
          'image': require('./assets/pavilion.png')
        },
      ],
    }
  },
  components: {
    GoTop,
    Header,
    Footer,
    Menu,
  },
  metaInfo: {
    title: 'СтройМодульБыт',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Acrom;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  margin-bottom: 50px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
      border: 1px solid red;
    }
  }
}

.body {
  margin: 80px 0px;
  transition: all 1s ease-out;
}
</style>

