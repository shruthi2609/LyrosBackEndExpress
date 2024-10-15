const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const cookieparser=require("cookie-parser")
require("dotenv").config()
const cors=require("cors")
app.use(cookieparser())
app.use(cors({origin:"https://lyrosreactapp.netlify.app",credentials:true}))
app.use(bodyparser.json())

const contactsRoute=require("./route/contactManagerFinal")
const credRoutes=require("./route/credentialsRoute")

app.use(credRoutes)
app.use(contactsRoute)

app.listen(process.env.DEV_PORT,()=>console.log("server has started"))