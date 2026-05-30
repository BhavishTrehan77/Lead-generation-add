const Auth=async(req,resp,next)=>{
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
            const token=req.headers.authorization.split(" ")[1]
            if(!token){
                return resp.json({
                    success:false,
                    message:"token not found"
                })
            }
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            if(!decode){
                return resp.json({
                    success:false,
                    message:"not decoded"
                })
            }
            req.user=decode
            next()
        }else{
            return resp.json({
                success:false,
                message:"not done"
            })
        }
    }catch(err){
        return resp.json({
            success:false,
            message:err.message
        })
    }
}
module.exports=Auth