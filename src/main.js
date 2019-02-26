import '@fortawesome/fontawesome-free/css/all.css'
import 'material-icons-fonts/index.css'
import 'roboto-fontface-woff/css/roboto/roboto-fontface.css'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import Vuetify from 'vuetify'
import App from './App.vue'
import Vue from 'vue'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.use(Vuetify, {
    iconfont: 'fa',
})

Vue.prototype.log = console.log.bind(console)

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
