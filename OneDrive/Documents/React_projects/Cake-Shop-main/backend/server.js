const express=require("express")
const bodyParser = require('body-parser');
const mysql=require("mysql")
const cors=require("cors")

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const db = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",       
  user: "user1",         
  password: "12345",  
  database: "signup",     
})

app.post('/signup',(req,res)=>{
   const sql='INSERT INTO login(First_Name,Last_Name,Email,Password) VALUES(?,?,?,?)';
   const values=[
    req.body.First_Name,
    req.body.Last_Name,
    req.body.Email,
    req.body.Password,
   ];
   console.log("Received Request Body:", req.body);
   

   db.query(sql,values,(err,data)=>{
     if(err) return res.json(err);
     return res.json(data);
   })
})

app.post('/login', (req, res) => {
   console.log("Received POST request");

      const user = req.body.Email;
      const password = req.body.Password;

      console.log(req.body.Email)
      console.log(password)

      db.getConnection ( async (err, connection)=> {
      if (err) throw (err)
      const sqlSearch = "Select * from login where Email = ?"
      const search_query = mysql.format(sqlSearch,[user])
      await connection.query (search_query, async (err, result) => {
        connection.release()
        
        if (err) throw (err)
        if (result.length == 0) { 
        console.log("--------> User does not exist")
        res.sendStatus(404)
        } 
        else {
          console.log(result[0].Password)
          const hashedPassword = result[0].Password
          if(hashedPassword == password){
          console.log("---------> Login Successful")
          res.send(`${user} is logged in!`)
          } 
          else {
          console.log("---------> Password Incorrect")
          res.send("Password incorrect!")
          } 
        }
      })
      }) 
    });





app.listen(8081,()=>{
    console.log("listening");
})