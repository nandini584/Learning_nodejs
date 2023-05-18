const mongoose= require('mongoose')
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"error found, enter the empty field"]
    },
    phone:{
        type:String,
        required:[true,"error found, enter the empty field"]
    },
    email:{
        type:String,
        required:[true,"error found, enter the empty field"]
    },
},{
    timestamps: true,
})
module.exports=mongoose.model("Contact",contactSchema)