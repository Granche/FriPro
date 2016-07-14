var express = require('express');
var app = express();


app.get('/', function (req, res) {

		res.sendFile("/public/Test5.html", {"root": __dirname})
});

app.use(express.static('public'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("\n\n\n\nDAGIS - Servern är igång\n\n\ - Lyssnar på port : " + port + "\n");
  
  console.log("###########");
  
  
 });