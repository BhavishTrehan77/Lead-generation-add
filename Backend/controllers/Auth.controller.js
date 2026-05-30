const User=require('../models/user.models')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const Signup=async(req,resp)=>{
    const data=await User.create(req.body)
    resp.json(data)
}
const Login=async(req,resp)=>{
    const{name,email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return resp.json({
            success:false,
            message:"user not found"
        })
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return resp.json({
            success:false,
            message:"password missmatched"
        })
    }
    const accessToken=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'20s'})
    const refreshToken=jwt.sign({id:user._id,role:user.role},process.env.REF_SECRET,{expiresIn:'2d'})
    resp.json({
        sucess:true,
        accessToken,
        refreshToken
    })

}
const refresh=async(req,resp)=>{
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return resp.json({
            success:false
        })
    }
    const token=authHeader.split(" ")[1]
    const decoded=jwt.verify(token,process.env.REF_SECRET)
    const newAccessToken=jwt.sign({id:decoded.id,role:decoded.role},process.env.JWT_SECRET)
    resp.json({
        success:true,
        newAccessToken
    })
}

module.exports={
    Signup,
    Login,
    refresh
}