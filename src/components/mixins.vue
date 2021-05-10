<script>

import axios from 'axios';
import Global from '../Global';

var Mixins = {
    data(){
        return {
            users: [],
            userId: null,
            err: null,
            
        }
    },
    methods: {
        getUsers(userId){
            var url = ( userId === undefined ) ? ( Global.URL + 'users' ) : ( Global.URL + 'user/' + userId );

            axios.get(url)
                .then(res => {
                    this.users = res.data;
                }).catch(err => {
                    this.err = true;
                    console.log(err);
                })
               
        }
    }
}

export default Mixins;

</script>


