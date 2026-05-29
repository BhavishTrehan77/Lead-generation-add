const Lead = require("../models/lead.models")

const getAllLeads = async(req,resp)=>{

    const leads = await Lead.find()

    resp.json({

        success:true,

        leads

    })

}
const updateLeadStatus=async(req,resp)=>{
    const{status}=req.body

    const lead=await Lead.findByIdAndUpdate(req.params.id,{status},{new:true})
    resp.json({
        message:"success",
        lead
    })
}

const deleteLead=async(req,resp)=>{
    const id=req.params.id
    const lead=await Lead.findByIdAndDelete(id)
    resp.json({
        success:true,
        message:"lead deleted success"
    })
}


module.exports = {
    getAllLeads,
    updateLeadStatus,
    deleteLead
}