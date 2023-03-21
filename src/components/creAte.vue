<template>
    <div>
        <div>
        <ul class="ul">
            <li class="li"><a v-on:click="logout" class="a" href="">logout</a></li>
            <li class="li"><a href="/" alt="home" class="a">Back to home</a></li>
            <li class="li"><a href="/viewtask" alt="view" class="a">View tasks</a></li>
        </ul>
        </div><br><br><br>
        <h1 style="margin-top:150px;" class="head">To create a task fill the details below</h1><br>
        <div class="edit">
            <div class="formfield">
            <label for="name"><b>Task name   </b></label>
            <textarea class="ts1" type="text" placeholder="Task name" v-model='task'/><br><br>
            </div>
            <label for="date"><b>Date      </b></label>
            <input class="ts1" type="date" placeholder="Choose a date" v-model='date'><br><br>
            <button class="edit1" v-on:click="submit" align="center">Submit</button>
        </div>
        
        
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:'creAte',
    data(){
        return{
            task:'',
            date:'',
        }
    },
    methods:{
    async submit(){
     let user_id=JSON.parse(localStorage.getItem("user-info"))
     let result= await axios.post("http://localhost:5000/task",{
        task:this.task,
        date:this.date,
        id:parseInt(user_id.user_id),
    })
     //.then(response => console.log(response.data))
     console.log(this.task,this.date)
     console.warn(result)
     this.$router.push({name:'viewtask'})
     },
     logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        },
    
    },
    mounted(){
    console.warn("mount")
    let iid=localStorage.getItem("user-info.values(id)")
    console.log(iid)
    let user= localStorage.getItem('user-info')
        //console.log(user.type)
        if(user){
        this.$router.push({name:'create'})
    }
    else{
      this.$router.push({name:'login'})
    }
  }
    
}
</script>

<style>
/*.head{
    margin-top: 150px;
    
}
.edit1{
    background-color: white;
    color:black;
    
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
.ts1{
    /*border-color:orange solid;*/
    border:2px solid orange;
}
.formfield {
   /* display: flex;  */
  align-items: center;
} 
</style>