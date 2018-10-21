const MongoClient = require('mongodb').MongoClient
//client gives you access to db //db gives access to read or write data
MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
  if(err) {
     return console.log("unable to connect to db")
  }
  console.log("connected to db")

//   db.collection('Todos').insertOne({
//    text : "something to do",
//    completed : false
//   },(err,result)=>{
//    if(err) {
//        return console.log('unable to insert',err)
//    }
//    console.log(JSON.stringify(result.ops,undefined,2))
//   })
 db.collection('Users').insertOne({
     name : "Bharath",
     age : 22,
     location : "Hyderabad"
 },(err,result)=>{
     if(err) {
         return console.log('collection not saved',err)
     }
     console.log(JSON.stringify(result.ops,undefined,2))
 })



  db.close()
})