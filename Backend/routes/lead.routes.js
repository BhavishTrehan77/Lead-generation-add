const express=require('express')
const createLead = require('../controllers/lead.controllers')
const controllers=require('../controllers/admin.controllers')


const router=express.Router()



router.post("/lead",createLead)
router.get("/leads",controllers.getAllLeads)
router.put("/lead/:id",controllers.updateLeadStatus)
router.delete("/lead/:id",controllers.deleteLead)
module.exports=router

