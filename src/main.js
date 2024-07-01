import Vue from 'vue'
import App from './App.vue'
import store from './store'   // Import the Vuex store for managing state
import './assets/styles/tailwind.css'
import './assets/styles/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,  // Pass the Vuex store instance to the Vue instance
}).$mount('#app')
