import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import VuePageTransition from 'vue-page-transition'
import '@babel/polyfill'
import 'mutationobserver-shim'
import VueLazyload from 'vue-lazyload'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faPhone)
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VuePageTransition)
Vue.use(BootstrapVue)
Vue.use(VueMeta, { refreshOnceOnNavigation: true })
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/loading.gif'),
  attempt: 1,
  listenEvents: [ 'scroll' ],
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
