<template>
<div>
    <ul class="ul">
            <li class="li"><a v-on:click="logout" class="a" href="">logout</a></li>
            <li class="li"><a href="/taskdata" alt="home" class="a">Tasks data</a></li>
            <li class="li"><a href="/userdata" alt="view" class="a">Users data</a></li>
    </ul>
     <h1>Hii admin</h1>
     <h3>You can see all the users and task details</h3>
    
    
</div>
   
</template>
<script>
export default {
    name:'adMin',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        },
    }
}
</script>
<style>
/*.edit{
    padding: 10px;
    margin: 10px;
    
}*/
.ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:orange;
}

.li {
  float: right;
}

.a {
  display: block;
  padding: 8px;
  color:azure;
  /*background-color: #dddddd;*/
}
</style>