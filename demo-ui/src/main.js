import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles

// Vue.use(VueCompositionApi)
Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')