<template src="./Users.html"></template>

<script>
import Lang from '../lang/lang';

import UserDetails from './UserDetails';

import Mixins from './mixins';

export default {
    name: 'Users',
    mixins: [Mixins],
    data(){
        return {
            lang: {
                results: Lang.results,
                seeMore: Lang.seeMore,
                seeUsers: Lang.user.listUsers,
                errConnect: Lang.errConnect,
            }
        }
    },
    components: {
        UserDetails
    },
    mounted(){
        this.getUsers();
    },
    methods: {}
}
</script>
