import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDfSu2azJZdQA41qgjII5Tt4qcIaQ72i4Q",
  authDomain: "satudy-2c738.firebaseapp.com",
  databaseURL: "https://satudy-2c738.firebaseio.com",
  projectId: "satudy-2c738",
  storageBucket: "satudy-2c738.appspot.com",
  messagingSenderId: "190321427781",
  appId: "1:190321427781:web:947a4a035713cb2a"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')