const express = require('express');
const path = require('path');
const {addCards} = require("./database/mongo.js");

const app = express();
const router = express.Router();
const port = 3000;


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
router.get('/',function(req,res){
  res.sendFile('/index.html');
});

app.post("/",function(req,res){ 
  addCards(req.body.first_name, req.body.last_name, req.body.email, req.body.password);
}); 
 
app.listen(port, async() => {
  console.log(`Example app listening on port ${port}`)
})