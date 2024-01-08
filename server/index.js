const express = require("express")
const color = require("colors")
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())
const dbconnection  = require("./conn")
dbconnection()
const port = 5000;

const userRouter = require("./routes/router")

app.use(userRouter)
app.use("/imageapi",express.static("./uploads"))

app.listen(port,()=>{
   console.log(`Server is running at Port no ${port}`.bgGreen);
})