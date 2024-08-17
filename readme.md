core module ->


global module ->


middleware ->

builtin middleware, custom middleware, thirdparty middleware.


Asynchronous ==> In Asyncronous, second task do  not wait to finish First task.
ex -> user -> products -> cities



synchrounous ==> in synchronous operations task are performed at a time.
ex -> users
       products
          cities



Call stack -->  it's a stack of functions and register all the function.
which function is inherit from javascript and c++ which goes on node api's. so all the node api register funciton whcih goes on callback queue.



Event Loop --> 



Middleware --> 

what are middleware, 
how to make a middleware,
apply middleware on routes,
types of middleware, 


type of middleware -> 
a. application level middleware -> app.use
b. Router level middleware. -> express.router().use
c. Error handling middleware.
d. built in middleware.
e. third party middleware.


ROUTE LEVEL MIDDLEWARE ---> those middleware which work on single route, group of routes and all given routes these are middleware.



INSTALL MONGO DB STEAPS ->

a. Download mongo db
b. install mongo db.
c. set enviorment for mongo.
d. mongodb compass tool.


what is mongoDB -> mongo db is NOSQL database
 -> the data stored in a collection.
 -> collection don't have row and columns
 -> Data is stored in the form of object.


mongoDB vs SQL
MongoDB basic command.



CRUD operations in mongo db


===> Q1. How to connect node and mongoDB.



How to access mongodb in terminal?

`mongod` > new terminal > `mongosh` greater than 6.0 or `mongo`

use you database

`use <your_db_name>`

your collection 

`db.<your_collection_name>.<commands you_want_to_use>`



--> Read Data from MongoDb
--> make file for db connection.
--> handle promised.


--> make new file for insert data.
--> import mongodb connections.
--> insert single and multiple records.



--> update data in mongodb.
  --> make new file for update data.
  --> import mongodb connecitons.
  --> update single and multiple records.

--> Delete Data in Mongdb.
  --> make a new file for delete data.
  --> import mongodb connections.
  --> delete single and multiple records.



API with mongo DB.
  --> make new file for api.
  --> import and use mongo config.
  --> make api for get data.
  --> test with postman.


Node js post API method
  --> make post method for api.
  --> send data from postman.
  --> get data in node js by request.
  --> write code for insert data in mongodb.
  

Node Js PUT api method
  --> make put mehtod for api.
  --> send data from postman
  --> handle data in node js by request.
  --> write code for update data in mongodb.


Node js Delete api method
  --> Make delete mehtod for api.
  --> send data from postman.
  --> Handle data in node js by req.
  --> write code for delete data in mongodb.



START WITH MONGOOSE.
 --> what is mongoose -> it's a package to connectnode to mongodb.
 --> Diffrence between mongoose vs mondodb package.
     we can use models and schema in mongoose but in mongodb we can not.
     we can give field types in mongoose but in mongodb we can not.
 --> install mongoose -> npm i mongoose
 --> what is schemas. -> schema is a json format of field it's validate fields type.
 --> what is model.-> model connect node js to mongodb.
 --> connect Node js and mongodb with mongoose.


CRUD with mongoose.
 --> continue last video code(what is mongoose, model, scheam) etc.
 --> update Record.
 --> Delete Record.
 --> Find and Read Result.
 


POST API with mongoose
 --> make config file for mongoDB
 --> make post route
 --> GET data from the postman and save in DB





GET, DELETE AND PUT API
 --> example of get method api
 --> example of delete method api.
 --> examople of put mehjtod api




Search Api in node js with mongo DB.
 --> make simple get route for api.
 --> search with single field.
 --> search with multiple fields.
 --> test api.


Upload file in node js 
 --> install multer npm package.
 --> make router for upload file
 --> write code for upload file




OS Module in  node js.
 --> what is os module -> this is operation system module it's use to when we need to inquiry of os so that time we use this.
 --> important function of os module ->
 os.arch -> it's used to check architecture
 os.freemem() -> it's give in byte.
 os.totlamem() -> check toal memory
 os.hostname() -> check host name
 os.platform() -> check platfr
 os.userInfo() -> check user info






EVENTS and EVENT EMITTER in node js 
 --> what is events and event emitter
 --> make an event and call it.



REPL (read, eval, print, loop)
 --> this is a command line tool where we can run javascript and node code
 