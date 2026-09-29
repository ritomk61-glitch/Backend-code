const express = require('express');
const app  = express();
const PORT = 3000
app.use(express.json());

app.get('/', (request, repsonse)=>{    
})

app.post("/register", (request, repsonse)=>{
      const data = request.body
     console.log({...data})
    const  name = data.name
    const email  = data.email
 //   insert intyo user values( 'Arun' , 'race7290@gmail.com')
     
      const sql = "insert into users values (" +  "'" + name  + "'" + ","  +  "'" + email  + "'"+")"

      console.log(sql)
})


app.listen(PORT, (err)=>{
  if(err){
      console.log("Server Rasn into Problem")
  }
  console.log("Server Running")

})