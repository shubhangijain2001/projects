<template>
    <div>
        <ul class="ul">
            <li class="li"><a href="/" alt="home" class="a">Back to home</a></li>
            <li class="li"><a href="/viewtask" alt="view" class="a">View all the task</a></li>
        </ul>
        
        
        <h1>Update your task</h1><hr>
        <div class="edit">
            
            <label for="name"><b>Task name   </b></label>
            <textarea type="text" placeholder="Task name" v-model='task'/><br><br>
            <label for="date"><b>Date      </b></label>
            <input type="date" placeholder="Choose a date" v-model='date'><br><br>
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
     this.$router.push({name:'viewtask'})
     },

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
</style>