require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const connecctdb = require('./config/db')
const router = require('./routes/lead.routes')
const app=express()
app.use(express.json())
app.use(cors())

connecctdb()

app.use("/api/data",router)

app.listen(3000)