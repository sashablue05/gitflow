<template src="./Header.html"></template>

<script>
import Lang from '../lang/lang';

export default{
    name: 'Header',
    data(){
        return {
            lang: {
                home: Lang.menu.home
            }
        }
    }
}
</script>
