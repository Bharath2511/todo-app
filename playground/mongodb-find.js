//const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')

//client gives you access to db //db gives access to read or write data
MongoClient.connect("mongodb://localhost:27017/todoApp",(err,db)=>{
  if(err) {
     return console.log("unable to connect to db")
  }
  //findbyid
  console.log('connected to mongodb')
  db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    console.log(docs )
  },(err)=>{
      console.log(err)
  })


  //db.close()
})