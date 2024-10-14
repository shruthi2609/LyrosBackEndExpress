const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const cookieparser=require("cookie-parser")

const cors=require("cors")
app.use(cookieparser())
app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(bodyparser.json())

const contactsRoute=require("./route/contactManagerFinal")
const credRoutes=require("./route/credentialsRoute")

app.use(credRoutes)
app.use(contactsRoute)

app.listen(3001,()=>console.log("server has started"))