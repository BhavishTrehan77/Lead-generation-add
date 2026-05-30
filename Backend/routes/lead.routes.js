const express=require('express')
const createLead = require('../controllers/lead.controllers')
const controllers=require('../controllers/admin.controllers')
const Rbac = require('../middlewares/Rbac')
const Auth = require('../middlewares/Auth')
const { Signup, Login, refresh } = require('../controllers/Auth.controller')


const router=express.Router()



router.post("/lead",createLead)
router.get("/leads",controllers.getAllLeads)
router.put("/lead/:id",controllers.updateLeadStatus)
router.delete("/lead/:id",controllers.deleteLead)
router.post("/signup",Signup)
router.post("/login",Login)
router.post("/refresh",refresh)
module.exports=router

