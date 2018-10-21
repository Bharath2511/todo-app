const MongoClient = require('mongodb').MongoClient
//client gives you access to db //db gives access to read or write data
MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
  if(err) {
     return console.log("unable to connect to db")
  }
  console.log("connected to db")

  db.close()
})