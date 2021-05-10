<template src="./UserDetails.html"></template>

<script>
import Lang from '../lang/lang';

export default {
    name: 'UserDetails',
    data(){
        return {
            lang: {
                seeMore: Lang.seeMore,
            }
        }
    },
    props: {
        user: Object
    }
}
</script>
