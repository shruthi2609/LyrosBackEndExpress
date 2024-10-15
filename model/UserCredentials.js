const mongoose=require("mongoose")
const url=`mongodb+srv://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PW}@cluster0.rpq7s.mongodb.net/${process.env.TEST_DB}?retryWrites=true&w=majority&appName=Cluster0`
const connect=mongoose.connect(url).then((res)=>console.log("connected successfully")).catch((err)=>console.log(err))
const valid=require("validator")
const credentialsSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username its a req field"]
    },
    password:{
        type:String,
        validate:{
        validator:function(value){
            return valid.isAscii(value)
        },
        message:"password validation failed , password should be alphanumeric"
    }},
    email:{
        type:String,
        validate:{
        validator:function(value){
            return valid.isEmail(value)
        },
        message:"email validation failed"
    }
    },
    phone:{
        type:Number,
      
    }
} )
const CredentialsModel=mongoose.model("credentials",credentialsSchema)
const contactsModel=mongoose.model("contacts",{
    cname:{
        type:String,
        required:true
    },
    cno:{
        type:Number,
        required:true,
        unique:true
    },
    cemail:{
        type:String,
        required:true,
        unique:true
    },
    caddress:{
        type:String,
    },
    ctech:{
        type:Object
    },
    cexp:{
        type:String
    }
})

module.exports={
    CredentialsModel,contactsModel
}
