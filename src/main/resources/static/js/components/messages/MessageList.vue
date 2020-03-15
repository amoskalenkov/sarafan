<template>
    <v-layout class="mx-8" align-space-around justify-start column>
        <message-form :messagesss="messagess" :messageAttr="message"/>
        <message-row v-for="message in sortedMessages"
                     :key="message.id"
                     :messagee="message"
                     :editMessage="editMessage"
                     :deleteMessage="deleteMessage"
                     :messages="messagess"/>
    </v-layout>
</template>

<script>
    import MessageRow from 'components/messages/MessageRow.vue'
    import MessageForm from 'components/messages/MessageForm.vue'
    import messagesApi from 'api/messages'

    export default {
        props: ['messagess'],
        components: {
            MessageRow,
            MessageForm
        },
        data(){
            return{
                message: null
            }
        },
        computed: {
            sortedMessages() {
                return this.messagess.sort((a, b) => -(a.id - b.id))
            }
        },
        methods: {
            editMessage(message) {
                this.message = message
            },
            deleteMessage(message){
                messagesApi.remove(message.id).then(result => {
                    if (result.ok) {
                        this.messagess.splice(this.messagess.indexOf(message), 1)
                    }
                })
            }
        }
    }
</script>

<style>

</style>