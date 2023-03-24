<template>
    <div>
        <div>
        <ul class="ul">
            <li class="li"><a href="" v-on:click="logout" class="a"> logout </a></li>
            <li class="li"><a href="/" alt="home" class="a">Back to home</a></li>
        <li class="li"><a href="/create" alt="create" class="a">Create a new task</a></li>
        
        </ul>
        
        </div><br>
        <h1 class="h11">All tasks</h1>
            
               
            <table align="center" v-if="arr1.length" class="table">
            <tr>
                <th>Task name</th>
                <th>Task date</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            
                <tr v-for="res in arr1" :key="res.id"> 
                    <td>{{res.task_name}}</td>
                    <td>{{res.task_date}}</td>
                    <td><button v-on:click="updatee(res.task_id)"> update </button></td>
                    <td><button v-on:click="deletee(res.task_id)"> delete </button></td>
                </tr>
                </table>
        <h2 class="h22" v-else>Oops! No tasks found</h2>
        <br><br>
        
    </div>
</template>

<script>
import axios from 'axios'
import router from '../routes'
export default {
    name:'viewTask',
  data(){
    return{
        arr1:[],
        arr:[],
    }
  },
  async mounted(){
    let result=await axios.get("http://localhost:5000/task");
    this.arr=result.data
    //console.log(this.arr)
    let user1= localStorage.getItem('user-info')
    let user2=JSON.parse(user1)
    console.log(user1)
    console.log('hooo')
    if(user1==null){
          console.log('bxabisbi')
        this.$router.push({name:'login'})
    }
    else if(user2 && user2.type=='true'){
      console.log('gygiygygy',user2.type)
      router.push('/admin')
    }
    let user=JSON.parse(user1).user_id
    console.log(user)
    this.arr1=this.arr.filter((item)=>item.fk_user_id==`${user}`)
    /*let user=JSON.parse(localStorage.getItem('user-info')).user_id
    console.log(user)
    this.arr1=this.arr.filter((item)=>item.fk_user_id==`${user}`)*/
    
        
        
    },
  methods:{
    
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
    logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        }
  },
  
}
</script>

<style>
/*.editt{
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
.h11{
    margin-left: auto;
    margin-right: auto;
}
.h22{
     position:fixed;
    top: 50%;
    bottom: 50%;
    left:40%;
    
}

</style>