const mongoose=require('mongoose')



const Schemadata=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    source:{
        type:String,
        default:"facebook"
    },
    status:{
        type:String,
        enum:["new","contacted","closed"],
        default:"new"
    }
})

const Lead=mongoose.model('Lead',Schemadata)

module.exports=Lead