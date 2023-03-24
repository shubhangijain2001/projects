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
    
    let user= JSON.parse(localStorage.getItem('user-info'))
    this.name=user.name
    console.log(user)
    if(!user){
        this.$router.push({name:'login'})
    }
    else if(user && user.type=="true"){
      this.$router.push({name:'admin'})
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
