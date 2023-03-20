<template>
<div>
    <img class="logo" src="../assets/signuplogo.png" alt="image">
    <h1>Sign Up</h1>
    <div class="element">
        <label for="type">Admin</label>
        <input class="btn" type="checkbox" v-model="type">
        <input type="text" placeholder="Name" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button v-on:click="signup">Sign Up</button>
        <label class="cl" for="">Already have an account?</label>
        <a href="/login">Login </a>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default{
    name:'signUp',
    data(){
    return{
      name:'',
      email:'',
      password:'',
      type:''
    }
  },
  methods:{
   async signup(){
     console.log(this.name,this.email,this.password) 
     let result= await axios.post("http://localhost:5000/users",{
        name:this.name,
        email:this.email,
        password:this.password,
        type:this.type
     })
     let res= await axios.post(`http://localhost:5000/login`,{email:this.email,password:this.password});
     console.log(result);
     console.warn(result)
     if(result.status==201)
     {
        localStorage.setItem('user-info',JSON.stringify(res.data[0]))
        console.log(res.data[0].type)
        if(res.data[0].type==false)
              this.$router.push({name:'home'})
              else{
                this.$router.push({name:'admin'})
              }
     }
     console.log(this.type)
     }
  },
  mounted(){
    console.warn("mount")
    let user= localStorage.getItem('user-info')
    if(user){
        this.$router.push({name:'home'})
    }
  }
}
</script>
<style>
.bg{
    height: 100%;
    width:100%;
}
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
.btn{
    height:20px;
}
.cl{
    color: black;
}

</style>
