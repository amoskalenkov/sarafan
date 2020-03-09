<template>
    <div>
        <i>({{ messagee.id }})</i> {{ messagee.text }}
        <span style="position: absolute; right: 0">
            <input type="button" value="Edit" @click="edit"/>
            <input type="button" value="X" @click="del"/>
        </span>
    </div>
</template>

<script>
    export default {
        props: ['messagee', 'editMessage', 'deleteMessage', 'messages'],
        methods: {
            edit() {
                this.editMessage(this.messagee)
            },
            del() {
                this.deleteMessage(this.messagee)
            }
        }
    }
</script>

<style>

</style>