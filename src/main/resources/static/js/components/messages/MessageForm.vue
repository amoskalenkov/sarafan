<template>
    <div>
        <input type="text" placeholder="Write something" v-model="text"/>
        <input type="button" value="Save" @click="save"/>
    </div>
</template>

<script>
    import { sendMessage } from "util/ws";

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
                sendMessage({id: this.id, text: this.text})
                this.text = ''
                this.id = ''
                /*const message = { text: this.text};

                if(this.id){
                    this.$resource('/message{/id}').update({id: this.id}, message).then(result =>
                        result.json().then(data => {
                            const index = getIndex(this.messagesss, data.id)
                            this.messagesss.splice(index, 1, data)
                            this.text = ''
                            this.id = ''
                        })
                    )
                } else {
                    this.$resource('/message{/id}').save({}, message).then(result =>
                        result.json().then(data => {
                            this.messagesss.push(data);
                            this.text = ''
                        })
                    )
                }*/
            }
        }
    }
</script>

<style>

</style>