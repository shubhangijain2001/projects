<template>
<div>
    <ul class="ul">
            <li class="li"><a v-on:click="logout" class="a" href="">logout</a></li>
            <li class="li"><a href="/userdata" alt="view" class="a">Users data</a></li>
    </ul>
    <h1>Tasks data</h1>
    <table align="center" v-if="arr.length" class="table">
            <tr>
                <th>User name</th>
                <th>Task id</th>
                <th>Task name</th>
                <th>Task date</th>
                <th>Update</th>
            </tr>
            
                <tr v-for="res in arr" :key="res.id"> 
                    <div  v-for="user in arr1" :key="user.user_id">
              <td  v-if="user.user_id == res.fk_user_id">{{ user.name }}</td>
            </div>
                    <td>{{res.task_id}}</td>
                    <td>{{res.task_name}}</td>
                    <td>{{res.task_date}}</td>
                    <td><button v-on:click="updatee(res.task_id)"> update </button></td>
                    <td><button v-on:click="deletee(res.task_id)"> delete </button></td>
                </tr>
                </table>
        <h1 v-else>No tasks</h1>
    
</div>
    
</template>
<script>
import axios from "axios"
export default {
    name:'taskData',
    data(){
        return{
            arr:[],
            arr1:[]
        }
    },
    async mounted(){
        let result= await axios.get(`http://localhost:5000/task`)
        console.log(result.data)
        this.arr=result.data
        let res= await axios.get(`http://localhost:5000/users`)
        console.log(res.data)
        this.arr1=res.data
        let user= localStorage.getItem('user-info')
        //console.log(user.type)
        if(user){
        this.$router.push({name:'taskdata'})
    }
    else{
      this.$router.push({name:'login'})
    }
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        },
        async updatee(task_id){
        console.log(task_id)
        /*if(task_id){
            
        }*/
        //let res= await axios.post(`http://localhost:5000/update`,{id:task_id});
        this.$router.push({name:'update',params:{id:`${task_id}`}})
        //console.log(res)
    },
    async deletee(idd){
        console.log(idd)
       let result=await axios.post("http://localhost:5000/delete",{idd});
       let res=await axios.get("http://localhost:5000/task");
    this.arr=res.data
    console.log(result)
    console.log(this.arr);
    let user=JSON.parse(localStorage.getItem('user-info')).user_id
    console.log(user)
    this.arr1=this.arr.filter((item)=>item.fk_user_id==`${user}`)
    alert('deleted successfully')
    
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
table {
  border-collapse: collapse;
  width: 80%; 
}

.table {
  margin-left: 100px;
  }

th,
td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: rgb(255, 216, 144);
}
</style>