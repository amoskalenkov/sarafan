<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <user-link
                :user="messagee.author"
                size="48"
            ></user-link>
            <div class="pt-3">
                <p class="font-weight-bold">{{ messagee.text }}</p>
            </div>
        </v-card-text>
        <media v-if="messagee.link" :message="messagee"></media>
        <v-card-actions>
            <v-btn @click="edit" small text rounded>Edit</v-btn>
            <v-btn @click="del" small rounded>
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-actions>
        <comment-list
                :comments="messagee.comments"
                :message-id="messagee.id"
        ></comment-list>
    </v-card>
</template>

<script>
    import { mapActions } from 'vuex'
    import Media from 'components/media/Media.vue'
    import CommentList from 'components/comment/CommentList.vue'
    import UserLink from 'components/UserLink.vue'

    export default {
        props: ['messagee', 'editMessage'],
        components: { UserLink, CommentList, Media },

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