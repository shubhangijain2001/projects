<template>
    <div>
        <ul class="ul">
            <li class="li"><a href="/" alt="home" class="a">Back to home</a></li>
            <li class="li"><a href="/viewtask" alt="view" class="a">View all the task</a></li>
        </ul>
        
        
        <h1 style="margin-top:150px;">Update your task</h1><br>
        <div>
        <div class="formfield">
            
            <label for="name"><b>Task name   </b></label>
            <textarea class="ts1" type="text" placeholder="Task name" v-model='task'/><br><br>
            </div>
            <label for="date"><b>Date      </b></label>
            <input class='ts1' type="date" placeholder="Choose a date" v-model='date'><br><br>
            <button v-on:click="update" align="center">update</button>
        </div>
        
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'updAte',
    data(){
        return{
            task:'',
            date:'',
            id:''
        }
    },
    methods:{
    async update(){
    this.id=this.$route.params.id
    console.log("hii,",this.id)
     //let user_id=JSON.parse(localStorage.getItem("user-info"))
     let result= await axios.post("http://localhost:5000/update",{
        task:this.task,
        date:this.date,
        task_id:this.id,
    })
     //.then(response => console.log(response.data))
     console.log(this.task,this.date)
     console.warn(result)
     const user_type = JSON.parse(localStorage.getItem('user-info')).type
     console.log(user_type)
     if(user_type=='user' || user_type==false){
        console.log('jjjj')
        this.$router.push({name:'viewtask'})
     }
     else if(user_type=='true'){
        this.$router.push({name:'taskData'})
     }
     
     },

    },
    mounted(){
        let user= localStorage.getItem('user-info')
        //console.log(user.type)
        if(user){
        this.$router.push({name:'update'})
    }
    else{
      this.$router.push({name:'login'})
    }
    }
}
</script>
<style>
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
.ts1{
    /*border-color:orange solid;*/
    border:2px solid orange;
}
.formfield {
   /* display: flex;  */
  align-items: center;
} 
</style>