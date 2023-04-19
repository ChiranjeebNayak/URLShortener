const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const db = require ("./app/models/index");
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions)) 


db.mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("Error in db Connection");
  });
  require("./app/routes/shorturl.routes.js")(app);
  app.listen(8080, () => {
    console.log("connected to server !!");
  });


