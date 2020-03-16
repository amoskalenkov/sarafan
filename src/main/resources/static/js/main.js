import Vue from 'vue'
import App from 'pages/App.vue'
import '@babel/polyfill'
import 'api/resource'
import store from 'store/store'
import { connect } from "./util/ws";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

if(frontendDate.profile){
    connect()
}

Vue.use(Vuetify)

const opts = {}

new Vue({
    el: '#app',
    store,
    vuetify: new Vuetify(opts),
    render: a => a(App)
})
