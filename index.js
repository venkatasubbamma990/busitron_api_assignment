const mongoose=require("mongoose")
const express=require("express")
var cors = require('cors') 
const routes=require("./app")
const bodyParser = require("body-parser");
const app=express();
let port = 5000;
app.use(cors())
app.use("/",routes)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const mongoAtlas = "mongodb+srv://venkatasubbamma:sudha1454@cluster0.ucznbbk.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(mongoAtlas,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
//     console.log("connected to db")
// })
const connectDB = async () => {
    try {
      await mongoose.connect(mongoAtlas, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      });
      console.log("Connected to the database");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1); 
    }
  };
  
  connectDB();
app.listen(port, () => console.log(`App listening on port http://localhost:${port}`))
