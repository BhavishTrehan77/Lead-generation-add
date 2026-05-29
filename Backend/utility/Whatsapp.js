const twilio=require('twilio')


const client=twilio(
    process.env.ACC_SID,
    process.env.AUTH_TOKEN

)

module.exports=client