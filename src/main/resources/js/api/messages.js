import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const messages = Vue.resource('/message{/id}') //нужен для того чтобы обращаться к контроллеру

export default {
    add: message => messages.save({}, message),
    update: message => messages.update({id: message.id}, message),
    remove: id => messages.remove({id}),
    page: page => Vue.http.get('/message', {params: { page }})
}