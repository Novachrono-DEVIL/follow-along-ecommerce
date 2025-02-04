const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:Number},
    password: {type:String,required:true,minLength:5},
    confirmPassword: {type:String,required:true},
    avartar:{
        id:{type:String},
        url:{type:String}
    },
    address:[
        {
            country:{type:String ,required:true},
            city:{type:String},
            address1:{type:String},
            address2:{type:String},
            pincode:{type:Number,required:true}
        }
    ],
    role:{type:String,default:user},
    createdAt:{type:Date,default:Date.now()}

})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       return next()
    }
    await bcrypt.hash(this.password,12)
    next()
})

userSchema.methods.jsonToken= function(){
    return JsonWebTokenError.sign({id:this._id},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_EXPIRES})
}