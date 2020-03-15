<template>
    <v-layout>
        <v-text-field
                label="New message"
                placeholder="Write something"
                v-model="text"/>
        <v-btn @click="save">
            Save
        </v-btn>
    </v-layout>
</template>

<script>
    import messagesApi from 'api/messages'

    export default {
        props: ['messagesss', 'messageAttr'],
        data() {
            return {
                text: '',
                id: ''
            }
        },
        watch: {
            messageAttr(newVal, OldVal) {
                this.text = newVal.text
                this.id = newVal.id
            }
        },
        methods: {
            save() {
                const message = {
                    id: this.id,
                    text: this.text
                };

                if(this.id){
                    messagesApi.update(message).then(result =>
                        result.json().then(data => {
                            const index = this.messagesss.findIndex(item => item.id === data.id)
                            this.messagesss.splice(index, 1, data)
                        })
                    )
                } else {
                    messagesApi.add(message).then(result =>
                        result.json().then(data => {
                            const index = this.messagesss.findIndex(item => item.id === data.id)

                            if(index > -1){
                                this.messagesss.splice(index, 1, data)
                            }else {
                                this.messagesss.push(data)
                            }
                        })
                    )
                }
                this.text = ''
                this.id = ''
            }
        }
    }
</script>

<style>

</style>