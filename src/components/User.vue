<template src="./User.html"></template>

<script>

import Lang from '../lang/lang';

import Mixins from './mixins';

export default {
    name: 'Users',
    mixins: [Mixins],
    data(){
        return {
            lang: {
                back: Lang.back,
                userNotFound: Lang.message_err
            }
        }
    },
    mounted(){
        var userId = this.$route.params.id;
        this.getUsers(userId);
    },
    methods: {}
}
</script>
