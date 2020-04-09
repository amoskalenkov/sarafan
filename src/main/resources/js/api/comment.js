import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const comments = Vue.resource('/comment{/id}') //нужен для того чтобы обращаться к контроллеру

export default {
    add: comment => comments.save({}, comment),
}