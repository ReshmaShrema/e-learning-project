const User = require("../models/user");
const {hashPassword,comparePassword} = require('../utils/auth')

exports.register=async (req,res)=>{
    try{
        const {name,email,password} = req.body;

        if(!name || name.length<5){
            return res.status(400).send('Name is required and Should be min 6 character long');
        }

        if(!password||password.length<6){
            return res.status(400).send('Password is required and Should be min 6 Charecter long');
        }

        let userExist = await User.findOne({email}).exec();
        if(userExist){
            return res.status(400).send('Email is taken');
        }
        //hashed password
        const hashedPassword = await hashPassword(password); 
        const user = await new User({name, email, password:hashedPassword}).save();
        console.log("Saved User",user);
        return res.json({ok:true});
    }
    catch(err){
        console.log('err-registration',err);
        return res.status(400).send("Error Try Again ");
    }
}

