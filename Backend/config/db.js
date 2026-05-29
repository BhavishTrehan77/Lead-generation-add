const { default: mongoose } = require("mongoose");

async function connecctdb(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connection")
}

module.exports=connecctdb