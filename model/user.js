const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({

    email:{type:String,required:true},
    age:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String}
})

const User=mongoose.model("User",UserSchema);

module.exports=User;