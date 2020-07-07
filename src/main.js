import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false
Vue.use(Vuesax, {
  colors: {
    primary: '#0353A4',
    success: '#003bba',
    danger: '#9c003c',
    warning: '#9c003c',
    dark: '#061A40'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
