const Lead = require("../models/lead.models")
const Transporter = require("../utility/transporter")
const client = require("../utility/Whatsapp")

const createLead=async(req,resp)=>{
    try{
        const{name,email,phone}=req.body
        const lead=await Lead.create({
            name,email,phone
        })
        await Transporter.sendMail({
            from:process.env.MAIL,
            to:email,
            subject:"Registration success",
            text:"Thanks for  registering ,we will contact you soon"
        })
        await client.messages.create({
             body:`Hi ${name} 🚀

Thanks for registering.

Our team will contact you soon.`,

            from:process.env.PH_NO,

            to:`whatsapp:+91${phone}`
        })
        resp.json({
                success:true,
                message:"lead created success",
                lead
            })
    }catch(err){
        resp.json({
            success:false,
            message:err.message
        })
    }
}
module.exports=createLead