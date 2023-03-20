const client = require('./connection.js')
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

app.listen(5000, ()=>{
    console.log("Sever is now listening at port 5000");
})

client.connect();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

/*app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})*/


//signup
app.post('/users', (req, res)=> {
    const user = req.body;
    console.log(user);
    let insertQuery = `insert into users(name, email, password,type) 
    values('${user.name}', '${user.email}', '${user.password}','${user.type}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.status(201).send(user)

        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.post('/login', (req, res)=>{
    const { email, password } = req.body
    console.log(email,password)
    client.query(`Select * from  users where email='${email}' and password='${password}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//add task
app.post('/task', (req, res)=> {
    const user = req.body;
    console.log(user);
    let insertQuery = `insert into task(fk_user_id,task_name,task_date) 
    values('${user.id}','${user.task}', '${user.date}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.status(201).send('Insertion was successful')

        }
        else{ console.log(err.message) 
        res.send(err.message)}
    })
    client.end;
})
//view all the task
app.get('/task', (req, res)=>{
    client.query(`Select * from task`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            //console.log(result.rows)
        }
    });
    client.end;
})

//update task
app.post('/update', (req, res)=> {
    const {task_id,task,date}= req.body;
    //console.log(id,task,date);

    let insertQuery = `UPDATE task
    SET task_name = '${task}',task_date = '${date}' WHERE task_id='${task_id}'`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.status(201).send('update was successful')

        }
        else{ console.log(err.message) 
        res.send(err.message)}
    })
    client.end;
})

//delete task
app.post('/delete', (req, res)=> {
    const {idd}= req.body;
    //console.log(id,task,date);
    //console.log(task_id)
    let insertQuery = `DELETE FROM task
    WHERE task_id='${idd}'`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.status(201).send('delete was successful')

        }
        else{ console.log(err.message) 
        res.send(err.message)}
    })
    client.end;
})