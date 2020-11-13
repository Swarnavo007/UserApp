const User=require('../model/user');

const getUser=async (req,res,next)=>{
    try{
        const users=await User.find();
        return res.json({data:users});
    }
    catch(e){

    }
}

const createUser= async (req,res,next)=>{
    try{

        const user=new User();
        if(req.body.email.search(/[0-9]/)>0){
            throw new Error('Should contain only alphabet')
        }
        else{
            user.email=req.body.email;
        }
        if(req.body.age>21 || req.body.age<60){
            user.age=req.body.age;
        }
        else{
            throw new Error('Age should be between 21 to 60');
        }
        user.firstName=req.body.firstName;
        if(req.body.lastName===''){
            user.lastName='NA'
        }
        else{
            user.lastName=req.body.lastName;
        }

        await user.save();
        return res.json({message:"OK"});
    }
    catch(e){

        return res.status(400).json(e);
    } 
}

const getOneUser=async (req,res,next)=>{

    try{
        const userById=await User.findById(req.query.id);
        return res.json({data:userById});
    }
    catch(e){

        return res.status(400).json(e);
    }
}

const updateUser= async (req,res,next)=>{

    try{

        const userId=req.query.id;
        const updtUser=await User.updateOne({_id:userId},{$set:{firstName:req.body.firstName}});
        return res.json({data:updtUser});
    }
    catch(e){

        return res.status(400).json(e);
    }
}

const deleteUser=async (req,res,next)=>{

    try{

        const userIdDel=req.query.id;
        const del=await User.deleteOne({_id:userIdDel});
        return res.json({data:del});
    }
    catch(e){

        return res.status(400).json(e);
    }
}

module.exports={
    getUser,
    createUser,
    getOneUser,
    updateUser,
    deleteUser
}