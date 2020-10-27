//step4 - to define a model

// this will be our data base's data structure 

const mongoose=require("mongoose");
var userSchema=mongoose.Schema({
    id:Number,
    name:{
        des:"User's Name",
        type:String,
        required:true,
        trim:true,
         uppercase:true
    },
    email:{
        des:"User's Email Address",
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        des:"User's Password",
        type:String,
        required:true,
        trim:true,
        minlength:7,
        lowercase:true
    },
    age:{
        des:"User's age",
        type:Number,
        trim:true,
        },
        gender: {
            desc: "user gender.",
            trim: true,
            type: String,
            enum: ["Male", "Female", "Others"],
            default: "Others",
            required: true,
          },
          phone:String,
          create_date: {
            type: Date,
            default: Date.now
        }
});

module.exports=mongoose.model("Users",userSchema);
/*Instead, MongoDB Atlas runs on different cloud platforms, such as 
Amazon Web Services, Microsoft Azure, and Google Cloud Platform, 
all of which provide extensive 
offerings in terms of data center location and SLAs*/
//mongodb atlas provide service for hoisting our data online