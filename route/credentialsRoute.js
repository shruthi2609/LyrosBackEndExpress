const express=require("express")
const jwt=require("jsonwebtoken")
const { signUp, signIn } = require("../controller/credentialController")
const router=express.Router()

router.post("/v1/signup",signUp)
router.post("/v1/login",signIn)

module.exports=router