<template>
    <div>
        <ul class="ul">
            <li class="li"><a v-on:click="logout" class="a" href="">logout</a></li>
            <li class="li"><a href="/taskdata" alt="home" class="a">Tasks data</a></li>
    </ul>
        <h1>Users data</h1>
        <table align="center" v-if="arr.length" class="table">
            <tr>
                <th>User_id</th>
                <th>User_name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            
                <tr v-for="res in arr" :key="res.id"> 
                    <td>{{res.user_id}}</td>
                    <td>{{res.name}}</td>
                    <td>{{res.email}}</td>
                    <td>{{res.password}}</td>
                </tr>
                </table>
        <h1 v-else>No tasks</h1>
    </div>
    
</template>
<script>
import axios from "axios"
export default {
    name:'userData',
    data(){
        return{
            arr:[],
        }
    },
    async mounted(){
        let result= await axios.get(`http://localhost:5000/users`)
        console.log(result.data)
        this.arr=result.data
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
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