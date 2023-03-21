<template>
<div>
    <img class="logo" src="../assets/signuplogo.png" alt="image">
    <h1>LogIn</h1>
    <div class="element">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button v-on:click="login">login</button>
        <label class="cl" for="">Don't have an account?</label>
        <a href="/signup">Sign up </a>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    name:'loGin',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result= await axios.post(`http://localhost:5000/login`,{email:this.email,password:this.password});
            console.warn(result)
            console.log(result)
            if(result.status==200 && result.data.length>0)
            {
              localStorage.setItem("user-info",JSON.stringify(result.data[0]))
              console.log(result.data[0].type)
              if(result.data[0].type=='user' || result.data[0].type==false)
              this.$router.push({name:'home'})
              else{
                this.$router.push({name:'admin'})
              }
            }
        }
    },
    mounted(){
    console.warn("mount")
    let user= localStorage.getItem('user-info')
    console.log(user.type)
    if(user){
        this.$router.push({name:'home'})
    }
  }
}
    

</script>

<style>
.logo{
    width: 100px;
    height: 100px;
    padding-bottom: 5px
}
.element input{
    width: 200px;
    height: 30px;
    border: 1px solid;
    border: orange solid;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
.element button{
    width: 100px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
.element{
    display:grid;
}
.cl{
    color: black;
}

</style>