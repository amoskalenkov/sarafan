<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <i>({{ messagee.id }})</i>
            {{ messagee.text }}
        </v-card-text>
        <media v-if="messagee.link" :message="messagee"></media>
        <v-card-actions>
            <v-btn @click="edit" small text rounded>Edit</v-btn>
            <v-btn @click="del" small rounded>
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { mapActions } from 'vuex'
    import Media from 'components/media/Media.vue'

    export default {
        props: ['messagee', 'editMessage'],
        components: { Media },
        methods: {
            ...mapActions(['removeMessageAction']),
            edit() {
                this.editMessage(this.messagee)
            },
            del() {
                this.removeMessageAction(this.messagee)
            }
        }
    }
</script>

<style>

</style>