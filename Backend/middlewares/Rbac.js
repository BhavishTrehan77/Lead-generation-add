const Rbac=async(req,resp,next)=>{
    if(req.user.role=='admin'){
        next()
    }else{
        return resp.json({
            success:false,
            message:"role must be admin"
        })
    }
}
module.exports=Rbac 