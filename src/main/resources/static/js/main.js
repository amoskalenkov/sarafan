import Vue from 'vue'
import App from 'pages/App.vue'
import 'api/resource'
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
    vuetify: new Vuetify(opts),
    render: a => a(App)
})
