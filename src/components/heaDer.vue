<template>
    <div>
        <ul class="ul">
            <li class="li"><a v-on:click="logout" class="a" href="">logout</a></li>
            <li class="li"><a v-on:click="view" class="a" href="">View tasks</a></li>
            <li class="li"><a v-on:click="create" class="a" href="">Create task</a></li>

        </ul>
        
        
        

    </div>
</template>

<script>
export default {
    name:'heaDer',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        },
        create(){
            this.$router.push({name:'create'})
        },
        view(){
            this.$router.push({name:'viewtask'})
        }
    }
}
</script>
<style>
/*.edit{
    padding: 10px;
    margin: 10px;
    
}*/
</style>