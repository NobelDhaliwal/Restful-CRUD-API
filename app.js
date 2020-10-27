//step 1 - setting up a server
//requiring two modules
const express=require("express");
const bodyParser=require("body-parser");
 const cors = require('cors');
const mongoose=require("mongoose");
//intializing app
const app=express();
const Port=process.env.Port||8000;
//using Enviornment variable port
app.use(cors());
// app.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://localhost:3000");
//     next();
// });
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

const apiRoutes=require("./routes/api_routes");
//step3 -connecting mongoose with database
//this is our mongodb database
const dbRoute=
"mongodb+srv://MyMongoDBUser:nobelkaur098@cluster0.odvmg.mongodb.net/fullstack_app?retryWrites=true&w=majority";
// //connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true,useCreateIndex: true,
    useUnifiedTopology:true })
    .then(() => console.log( 'Database Connected' ))
     .catch((err) => { console.log( ` Connection Error ${err}` )});
    

//app want to use these bodyparser methods
app.use(bodyParser.urlencoded({extended:true,}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({message:"Welcome to API World"});
});
app.use("/api",apiRoutes);
//app is listening to port 8000
app.listen(Port,()=>{
    console.log(`Server listening to ${Port}`);
});
