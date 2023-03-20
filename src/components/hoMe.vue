<template>
<div >
    <heaDer class="editt"/>
    <div class="home">
        <h1>Hii {{name}},</h1>
    <h2>Organize your daily tasks here</h2>
    </div>
    
</div>
    

</template>
<script>
import heaDer from "./heaDer.vue"
export default{
    name:'hoMe',
    data(){
        return{
            name:'',
        }
    },
    components:{
        heaDer,
    },
     mounted(){
    console.warn("mount")
    
    let user= localStorage.getItem('user-info')
    this.name=JSON.parse(user).name
    if(!user){
        this.$router.push({name:'signup'})
    }
  }
}
</script>
<style>
.home{
    margin-top: 170px;
    color: black;
}

</style>
