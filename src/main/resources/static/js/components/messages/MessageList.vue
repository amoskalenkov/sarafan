<template>
    <div style="position: relative; width: 300px;">
        <message-form :messagesss="messagess" :messageAttr="message"/>
        <message-row v-for="message in messagess"
                     :key="message.id"
                     :messagee="message"
                     :editMessage="editMessage"
                     :deleteMessage="deleteMessage"
                     :messages="messagess"/>
    </div>
</template>

<script>
    import MessageRow from 'components/messages/MessageRow.vue'
    import MessageForm from 'components/messages/MessageForm.vue'
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
        methods: {
            editMessage(message) {
                this.message = message
            },
            deleteMessage(message){
                this.$resource('/message{/id}').remove({id: message.id}).then(result => {
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