import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import { connect } from "./util/ws";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

if(frontendDate.profile){
    connect()
}

Vue.use(VueResource)
Vue.use(Vuetify)

const opts = {}


new Vue({
    el: '#app',
    vuetify: new Vuetify(opts),
    render: a => a(App)
})
