
var messageApi = Vue.resource('/message{/id}');

Vue.component('message-row', {
    props: ['messagee'],
    template: '<div><i>({{ messagee.id }})</i> {{ messagee.text }}</div>'
});

Vue.component('messages-list', {
    props: ['messagess'],
    template:
        '<div>' +
            '<message-row v-for="message in messagess" :key="message.id" :messagee="message" />' +
        '</div>',
    created: function () {
        messageApi.get().then(result =>
            result.json().then(data =>
                data.forEach(messagei => this.messagess.push(messagei))
            )
        )
    }
})

var app = new Vue({
    el: '#app',
    template: '<messages-list :messagess="messages"/>',
    data: {
        messages: []
    }
});