const nodemailer=require('nodemailer')
const Transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MAIL,
        pass:process.env.PASSWORD

    }
})
module.exports=Transporter