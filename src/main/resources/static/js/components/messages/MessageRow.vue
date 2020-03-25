<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <div>
                <v-avatar
                        v-if="messagee.author && messagee.author.userpic"
                        size="36px"
                >
                    <img
                            :src="messagee.author.userpic"
                            :alt="messagee.author.name"
                    >
                </v-avatar>
                <v-avatar
                        v-else
                        size="48px"
                        color="indigo"
                >
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
                <span class="pl-3">{{ authorName }}</span>
            </div>
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

    export default {
        props: ['messagee', 'editMessage'],
        components: { CommentList, Media },
        computed: {
            authorName() {
                return this.messagee.author ? this.messagee.author.name : "unknown"
            }
        },
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