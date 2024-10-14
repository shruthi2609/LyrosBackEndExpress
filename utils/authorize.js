const jwt=require("jsonwebtoken")
function authorize(req,res,next){
    const auth=req.headers.authorization
    console.log(auth)
    const token=auth.replace("Bearer ","")
    const valid=jwt.verify(token,"jamesbond")
    console.log("valid",valid)
    if(valid){
      next()
    }
    else{
      res.send({
            status:"failed",
           message:"you are not authorized"
        })
    }

  //   try{
  //   
  //     next()
  //   }
   
  // catch(e){
  //   console.log(e)
  //   res.send({
  //     status:"failed",
  //     message:"you are not authorized"
  // })
  }
   
  

    
module.exports=authorize