const express=require("express")
const router=express.Router()

const {contactDetails,getUser,createUser,putUser,patchUserExp,deleteUser}=require("../controller/contactsManagerController")

const authorize=require("../utils/authorize")
const cookieAuthorize=require("../utils/cookieAuthorize")
router.get("/v1/contactdetails",contactDetails)
router.get("/v1/user",getUser)
router.post("/v1/user",authorize,createUser)
router.put("/v1/user",authorize,putUser)
router.patch("/v1/user/exp",patchUserExp)
router.delete("/v1/user/:username",cookieAuthorize,deleteUser)
// router.put("/v1/user",putUser)
// router.patch("/v1/user",patchUser)
// router.delete("/v1/user/:id",deleteUser)
module.exports=router