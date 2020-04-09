import Vue from 'vue'
import App from 'pages/App.vue'
import '@babel/polyfill'
import 'api/resource'
import router from 'router/router'
import store from 'store/store'
import { connect } from "./util/ws";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Sentry.init({
    dsn: 'https://66a83049265b4d0b9547875cd7c39f3a@sentry.io/5189634',
    integrations: [
        new Integrations.Vue({
            Vue,
            attachProps: true
        })
    ],
})

Sentry.configureScope(scope =>
    scope.setUser({
        id: profile && profile.id,
        username: profile && profile.name

    })
)

if(profile){
    connect()
}

Vue.use(Vuetify)

const opts = {}

new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify(opts),
    render: a => a(App)
})
