const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
router.get('/',function(req,res){
  res.sendFile('/index.html');
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})