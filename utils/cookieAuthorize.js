const jwt=require("jsonwebtoken")
function cookieAuthorize(req,res,next){
    console.log("cookies",req.cookies)
    if(req.cookies.accesstoken){
        const valid=jwt.verify(req.cookies.accesstoken,"jamesbond")
        if(valid){
            next()
        }
        else{
            res.status(401).send({
                status:"not successful",
                message:"unauthorized"
            })
        }
    }
    else{
        res.status(401).send({
            status:"not successful",
            message:"user session expired please login again"
        })
    }
  
}
module.exports=cookieAuthorize